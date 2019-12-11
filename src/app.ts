import express, { Request, Response, Application } from 'express';
import { MatchesService } from './services/matches.service';
import { LeagueResponse } from './models/league.model';
import { ServicesFactory } from './services/factory.services';
import cors from 'cors';
import env from 'dotenv-safe';
import { DashboardService } from './services/dashboard.service';

const app: Application = express();
const factory: ServicesFactory = new ServicesFactory();
env.config();

app.get('/matches', async (req: Request, res: Response) => {
    const service: MatchesService = factory.getMatchService();
    const model: LeagueResponse = await service.getMatches();
    res.send(model);
});

app.get('/matches/report', async (req: Request, res: Response) => {
    const service: DashboardService = factory.getDashBoardService();
    const model = await service.doReport();
    res.send(model);
});

app.use(cors());
app.listen(8080, () => console.log('Server running...'));