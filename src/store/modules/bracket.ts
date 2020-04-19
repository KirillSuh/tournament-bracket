import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Round } from '@/classes/round'
import { Match } from '@/classes/match'

@Module({ namespaced: true })
class Bracket extends VuexModule {
  DEFAULT_SIZE = 2
  public inputSize: number = this.DEFAULT_SIZE;
  public bracketSize: number = this.DEFAULT_SIZE;
  public roundList: Round[] = [];

  @Mutation
  public setInputSize (size: number): void {
    this.inputSize = size
  }

  @Mutation setBracketSize (size: number): void {
    this.bracketSize = size
  }

  @Mutation setRoundList (roundList: Round[]): void {
    this.roundList = roundList
  }

  @Action({ rawError: true })
  public updateSize (size: number): void {
    const bracketSize = 1 << 31 - Math.clz32(size || this.DEFAULT_SIZE)
    this.context.commit('setInputSize', size)
    this.context.commit('setBracketSize', bracketSize)
    const roundList: Round[] = []
    let roundNumber = 1
    let matchesCount = bracketSize / 2
    while (matchesCount >= 1) {
      const matchList: Match[] = []
      for (let matchNumber = 0; matchNumber < matchesCount; matchNumber++) {
        matchList.push(new Match([(matchNumber + roundNumber).toString(), (matchNumber + roundNumber + 1).toString()]))
      }
      roundList.push(new Round(roundNumber, matchList))
      roundNumber++
      matchesCount /= 2
    }
    this.context.commit('setRoundList', roundList)
  }
}

export { Bracket }
