import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { BracketTree } from '@/classes/BracketTree'

@Module({ namespaced: true })
class Bracket extends VuexModule {
  DEFAULT_SIZE = 2
  public inputSize: number = this.DEFAULT_SIZE;
  public bracketTree: BracketTree = new BracketTree(this.DEFAULT_SIZE);
  public isDoubleElimination = false;

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

  @Action({ rawError: true })
  public updateSize (size: number): void {
    const bracketSize = 1 << 31 - Math.clz32(size || this.DEFAULT_SIZE)
    this.context.commit('setInputSize', size)
    this.context.commit('setBracketTree', new BracketTree(bracketSize))
  }

  @Action({ rawError: true })
  public updateIsDoubleElimination (isDoubleElimination: boolean): void {
    this.context.commit('setIsDoubleElimination', isDoubleElimination)
  }

  @Action({ rawError: true })
  public randomizePlayers (): void {
    this.bracketTree.randomFirstMatchPlayers()
  }
}

export { Bracket }
