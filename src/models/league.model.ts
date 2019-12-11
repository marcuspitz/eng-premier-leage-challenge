import { Round } from "./round.model";

export interface LeagueResponse {
    name: string;
    rounds: Round[];
}