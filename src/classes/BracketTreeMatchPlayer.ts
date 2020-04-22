export interface BracketTreeMatchPlayerInterface {
  id?: number;
  name?: string;
}

export class BracketTreeMatchPlayer implements BracketTreeMatchPlayerInterface {
  public id?: number;
  public name?: string;

  constructor (name?: string) {
    this.name = name
  }

  setBracketTreeMatchPlayerValues (id: number, name: string) {
    this.id = id
    this.name = name
  }
}
