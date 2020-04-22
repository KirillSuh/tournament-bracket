import { BracketTreeMatchPlayer, BracketTreeMatchPlayerInterface } from '@/classes/BracketTreeMatchPlayer'

export interface BracketTreeMatchInterface {
  round: number;
  playerList: BracketTreeMatchPlayerInterface[];
  childMatches?: BracketTreeMatchInterface[];
}

export interface BracketTreeMatchRootInterface {
  round: number;
  player: BracketTreeMatchPlayerInterface;
  childMatch: BracketTreeMatch;
}

export class BracketTreeMatch implements BracketTreeMatchInterface {
  playerList: BracketTreeMatchPlayer[];
  round: number;
  childMatches?: BracketTreeMatch[];

  public constructor (round: number) {
    this.round = round
    this.playerList = [new BracketTreeMatchPlayer(), new BracketTreeMatchPlayer()]
  }
}
