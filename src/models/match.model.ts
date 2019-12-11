import { Team } from "./team.model";

export interface Match {
    date: Date;
    team1: Team;
    team2: Team;
    score1: number;
    score2: number;
}