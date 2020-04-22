import { BracketTreeMatch, BracketTreeMatchInterface, BracketTreeMatchRootInterface } from '@/classes/BracketTreeMatch'
import { BracketTreeMatchPlayer } from '@/classes/BracketTreeMatchPlayer'

export class BracketTree {
  private readonly roundsCount: number;
  public winnerBracketNode: BracketTreeMatchRootInterface;
  public loserBracketNode: BracketTreeMatchRootInterface;

  constructor (playersCount: number) {
    this.roundsCount = Math.log(playersCount) / Math.log(2) + 1
    this.winnerBracketNode = {
      player: new BracketTreeMatchPlayer('winner of winners'),
      round: this.roundsCount + 1,
      childMatch: new BracketTreeMatch(this.roundsCount)
    }
    this.generateBracket(this.winnerBracketNode.childMatch, this.roundsCount - 1)

    this.loserBracketNode = {
      player: new BracketTreeMatchPlayer('winner of losers'),
      round: this.roundsCount,
      childMatch: new BracketTreeMatch(this.roundsCount - 1)
    }
    this.generateBracket(this.loserBracketNode.childMatch, this.roundsCount - 2)
  }

  generateBracket (match: BracketTreeMatchInterface, round: number) {
    if (round > 0) {
      const newChildMatches = [new BracketTreeMatch(round), new BracketTreeMatch(round)]
      match.childMatches = newChildMatches
      newChildMatches.forEach(value => this.generateBracket(value, round - 1))
    }
  }

  randomFirstMatchPlayers () {
    let id = 1
    const current = this.winnerBracketNode.childMatch

    const traverse = (node: BracketTreeMatch) => {
      if (node.childMatches && node.childMatches[0]) traverse(node.childMatches[0])
      if (node.round === 1) {
        node.playerList[0].setBracketTreeMatchPlayerValues(id, `player ${id}`)
        node.playerList[1].setBracketTreeMatchPlayerValues(id + 1, `player ${id + 1}`)
        id += 2
      }
      if (node.childMatches && node.childMatches[1]) traverse(node.childMatches[1])
    }

    traverse(current)
  }
}
