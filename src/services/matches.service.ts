import request from "request-promise";
import { LeagueResponse } from "../models/league.model";

export class MatchesService {

    getMatches = async () : Promise<LeagueResponse> => {
        const url: string = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
        const response = await request(url);
        return JSON.parse(response);
    }

}