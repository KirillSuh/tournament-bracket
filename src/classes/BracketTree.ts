import { BracketTreeMatch, BracketTreeMatchInterface, BracketTreeMatchRootInterface } from '@/classes/BracketTreeMatch'

export class BracketTree {
  private readonly roundsCount: number;
  public winnerBracketNode: BracketTreeMatchRootInterface;
  public loserBracketNode: BracketTreeMatchRootInterface;

  constructor (playersCount: number) {
    this.roundsCount = Math.log(playersCount) / Math.log(2) + 1
    this.winnerBracketNode = {
      player: 'winner of winners',
      round: this.roundsCount + 1,
      childMatch: new BracketTreeMatch(this.roundsCount, ['', ''])
    }
    this.generateBracket(this.winnerBracketNode.childMatch, this.roundsCount - 1)

    this.loserBracketNode = {
      player: 'winner of losers',
      round: this.roundsCount,
      childMatch: new BracketTreeMatch(this.roundsCount - 1, ['', ''])
    }
    this.generateBracket(this.loserBracketNode.childMatch, this.roundsCount - 2)
  }

  generateBracket (match: BracketTreeMatchInterface, round: number) {
    if (round > 0) {
      const newChildMatches = [new BracketTreeMatch(round, ['', '']), new BracketTreeMatch(round, ['', ''])]
      match.childMatches = newChildMatches
      newChildMatches.forEach(value => this.generateBracket(value, round - 1))
    }
  }
}
