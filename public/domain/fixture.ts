import {League} from './league';
import {Team} from './team';
import {Odd} from './odd';

export class Fixture {
  id: number;
  timestamp: string;
  league: League;
  teamHome: Team;
  teamAway: Team;
  odd: Odd[];

  constructor(
    id: number,
    timestamp: string,
    league: League,
    teamHome: Team,
    teamAway: Team,
    odd: Odd[]
  ) {
    this.id = id;
    this.timestamp = timestamp;
    this.league = league;
    this.teamHome = teamHome;
    this.teamAway = teamAway;
    this.odd = odd;
  }
}
