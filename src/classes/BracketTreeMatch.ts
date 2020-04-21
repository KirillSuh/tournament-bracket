export interface BracketTreeMatchInterface {
  round: number;
  playerList: string[];
  childMatches?: BracketTreeMatchInterface[];
}

export interface BracketTreeMatchRootInterface {
  round: number;
  player: string;
  childMatch: BracketTreeMatchInterface;
}

export class BracketTreeMatch implements BracketTreeMatchInterface {
  playerList: string[];
  round: number;
  childMatches?: BracketTreeMatchInterface[];

  public constructor (round: number, playerList: string[]) {
    this.round = round
    this.playerList = playerList
  }
}
