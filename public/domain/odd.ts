import {Fixture} from './fixture';
import {Bookmaker} from './bookmaker';
import {Market} from './market';

export class Odd {
  id: number;
  name: string;
  value: number;
  bookmaker: Bookmaker;
  market: Market;
  fixture: Fixture;

  constructor(
    id: number,
    name: string,
    value: number,
    bookmaker: Bookmaker,
    market: Market,
    fixture: Fixture
  ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.bookmaker = bookmaker;
    this.market = market;
    this.fixture = fixture;
  }
}
