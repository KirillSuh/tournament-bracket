import { Match } from '@/classes/match'

export class Round {
  public number: number;
  public matchList: Match[] = [];

  constructor (number: number, matchList: Match[]) {
    this.number = number
    this.matchList = matchList
  }
}
