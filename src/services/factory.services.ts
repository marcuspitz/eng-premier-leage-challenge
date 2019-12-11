import { MatchesService } from "./matches.service";
import { DashboardService } from "./dashboard.service";


export class ServicesFactory {

    private matchService: MatchesService;
    private dashboardService: DashboardService;
    constructor() {
        this.matchService = new MatchesService();
        this.dashboardService = new DashboardService(this.matchService);
    }

    getMatchService = (): MatchesService => this.matchService;

    getDashBoardService = (): DashboardService => this.dashboardService;

}