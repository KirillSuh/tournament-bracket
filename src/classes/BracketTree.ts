import { BracketTreeMatch, BracketTreeMatchInterface, BracketTreeMatchRootInterface } from '@/classes/BracketTreeMatch'

export class BracketTree {
  private readonly roundsCount: number;
  public rootNode: BracketTreeMatchRootInterface;

  constructor (playersCount: number) {
    this.roundsCount = Math.log(playersCount) / Math.log(2) + 1
    const finalMatch = new BracketTreeMatch(this.roundsCount, ['final1', 'final2'])
    this.rootNode = {
      player: 'winner',
      round: this.roundsCount + 1,
      childMatch: finalMatch
    }
    this.generateBracket(finalMatch, this.roundsCount - 1)
  }

  generateBracket (match: BracketTreeMatchInterface, round: number) {
    if (round > 0) {
      const newChildMatches = [new BracketTreeMatch(round, [`test1 ${round}`, `test2 ${round}`]), new BracketTreeMatch(round, [`test1 ${round}`, `test2 ${round}`])]
      match.childMatches = newChildMatches
      newChildMatches.forEach(value => this.generateBracket(value, round - 1))
    }
  }
}
