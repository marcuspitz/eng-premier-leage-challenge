import { MatchesService } from "./matches.service";
import { TeamsDashboard, TeamsAggregator, Team } from "../models/team.model";
import { LeagueResponse } from "../models/league.model";
import { Match } from "../models/match.model";
import { Round } from "../models/round.model";

export class DashboardService {

    constructor(
        private matchesService: MatchesService
    ) {}

    doReport = async () : Promise<TeamsDashboard[]> => {
        let aggregator = new Map<string, TeamsAggregator>();
        const res:LeagueResponse = await this.matchesService.getMatches();        

        res.rounds.forEach( (round: Round) => 
            round.matches.forEach( (match: Match) => 
                this.aggregate(match, aggregator) ));
        
        let arr = Array.from(aggregator).
                    map( a => a[1]).
                    sort( (left: TeamsAggregator, right: TeamsAggregator) => left.wins < right.wins ? 1 : -1 );
        console.log(arr);

        let i: number = 1;
        return arr.map( (teamAgg: TeamsAggregator, idx: number) => {
            let dash: TeamsDashboard = {                
                rank: idx + 1,
                name: teamAgg.team.name,
                wins: teamAgg.wins,
                draws: teamAgg.draws,
                goalsAgainst: teamAgg.goalsAgainst,
                goalsFor: teamAgg.goalsFor,
                losses: teamAgg.losses,                
                goalsDifference: teamAgg.goalsFor - teamAgg.goalsAgainst,
                points: (teamAgg.wins * 3) + (teamAgg.draws * 1)
            };

            return dash;
        });
    }

    private aggregate = (match: Match, aggregator: Map<string, TeamsAggregator>) => {
        let team1: TeamsAggregator = this.getAggregator(match.team1, aggregator);
        let team2: TeamsAggregator = this.getAggregator(match.team2, aggregator);
        if (match.score1 > match.score2) {
            team1.wins++;
            team2.losses++;
        } else if (match.score2 > match.score1) {
            team2.wins++;
            team1.losses++;
        } else {
            team1.draws++;
            team2.draws++;
        }
        team1.goalsAgainst += match.score2;
        team2.goalsAgainst += match.score1;
        team1.goalsFor += match.score1;
        team2.goalsFor += match.score2;
    }

    private getAggregator = (team: Team, aggregator: Map<string, TeamsAggregator>): TeamsAggregator => {
        let agg: TeamsAggregator | undefined;
        if (aggregator.has(team.key)) {
            agg = aggregator.get(team.key);           
        }         
        if (agg === undefined) {
            let newAgg: TeamsAggregator = {
                team: team,
                draws: 0,
                goalsAgainst: 0,
                goalsFor: 0,
                losses: 0,
                wins: 0,
            };
            aggregator.set(newAgg.team.key, newAgg);
            return newAgg;
        } else {
            return agg as TeamsAggregator;
        }
    }

}