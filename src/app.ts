import express, { Request, Response, Application } from 'express';
import { MatchesService } from './services/matches.service';
import { LeagueResponse } from './models/league.model';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from here');
});

app.get('/matches', async (req: Request, res: Response) => {
    const service: MatchesService = new MatchesService();
    const model: LeagueResponse = await service.getMatches();
    console.log(model);
    res.send(model);
});

app.listen(5000, () => console.log('Server running...'));