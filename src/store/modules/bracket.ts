import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Match } from '@/store/modules/match'

@Module({ namespaced: true })
class Bracket extends VuexModule {
  DEFAULT_SIZE = 2
  public inputSize: number = this.DEFAULT_SIZE;
  public bracketSize: number = this.DEFAULT_SIZE;
  public matches: Match[] = [new Match(Match), new Match(Match)];

  @Mutation
  public setInputSize (size: number): void {
    this.inputSize = size
  }

  @Mutation setBracketSize (size: number): void {
    this.bracketSize = size
  }

  @Mutation setMatches (matches: Match[]): void {
    this.matches = matches
  }

  @Action({ rawError: true })
  public updateSize (size: number): void {
    const bracketSize = 1 << 31 - Math.clz32(size || this.DEFAULT_SIZE)
    this.context.commit('setInputSize', size)
    this.context.commit('setBracketSize', bracketSize)
    const matches = [...Array(bracketSize)].map((_, index) => {
      const match = new Match(Match)
      match.round = 0
      match.players = [index.toString(), (index + 1).toString()]
      return match
    })
    this.context.commit('setMatches', matches)
  }
}

export { Bracket }
