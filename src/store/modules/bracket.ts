import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { BracketTree } from '@/classes/BracketTree'
import { BracketTreeMatchPlayer } from '@/classes/BracketTreeMatchPlayer'

@Module({ namespaced: true })
class Bracket extends VuexModule {
  DEFAULT_SIZE = 2
  public inputSize: number = this.DEFAULT_SIZE;
  public bracketTree: BracketTree = new BracketTree(this.DEFAULT_SIZE);
  public isDoubleElimination = false;
  public dragStartPlayer?: BracketTreeMatchPlayer;
  public dragTargetPlayer?: BracketTreeMatchPlayer;

  @Mutation
  public setInputSize (size: number): void {
    this.inputSize = size
  }

  @Mutation setBracketTree (bracketTree: BracketTree): void {
    this.bracketTree = bracketTree
  }

  @Mutation setIsDoubleElimination (isDoubleElimination: boolean): void {
    this.isDoubleElimination = isDoubleElimination
  }

  @Mutation setDragStartPlayer (player: BracketTreeMatchPlayer): void {
    this.dragStartPlayer = player
  }

  @Mutation setDragTargetPlayer (player?: BracketTreeMatchPlayer): void {
    this.dragTargetPlayer = player
  }

  @Action({ rawError: true })
  public updateSize (size: number): void {
    const bracketSize = 1 << 31 - Math.clz32(size || this.DEFAULT_SIZE)
    this.context.commit('setInputSize', size)
    this.context.commit('setBracketTree', new BracketTree(bracketSize))
  }

  @Action({ rawError: true })
  public randomizePlayers (): void {
    this.bracketTree.randomFirstMatchesPlayers()
  }

  @Action({ rawError: true })
  public dragEnd (): void {
    if (this.dragTargetPlayer && this.dragStartPlayer) {
      this.bracketTree.changePlayers(this.dragStartPlayer, this.dragTargetPlayer)
    }
  }
}

export { Bracket }
