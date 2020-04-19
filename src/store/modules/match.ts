import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
@Module({ namespaced: true })
class Match extends VuexModule {
  public round = 1;
  public players: string[] = ['', ''];

  @Mutation
  public setRound (round: number): void {
    this.round = round
  }

  @Mutation
  public setPlayers (players: string[]): void {
    this.players = players
  }

  @Action
  public updateRound (round: number): void {
    this.context.commit('setRound', round)
  }

  @Action
  public updatePlayers (players: string[]): void {
    this.context.commit('setPlayers', players)
  }
}

export { Match }
