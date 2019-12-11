import request from "request-promise";
import { LeagueResponse } from "../models/league.model";

export class MatchesService {

    getMatches = async () : Promise<LeagueResponse> => {
        const url: string = process.env.MATCHES_URL as string;
        try {
            const response = await request(url);
            return JSON.parse(response);
        } catch {
            return {
                name: '', 
                rounds: []
            };
        }
    }

}