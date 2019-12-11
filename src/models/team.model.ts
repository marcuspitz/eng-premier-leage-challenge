
export interface Team {
    key: string;
    name: string;
    code: string;
}

export interface TeamsAggregator {
    team: Team;
    wins: number;
    draws: number;
    losses: number; 
    goalsFor: number;
    goalsAgainst: number;
}

export interface TeamsDashboard {
    rank: number;
    name: string;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDifference: number;
    points: number;
}