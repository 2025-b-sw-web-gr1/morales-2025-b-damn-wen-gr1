import { TeamsService } from './teams.service';
import { PlayersService } from '../players/players.service';
import { Team } from '../entities/team.entity';
import { Player } from '../entities/player.entity';
export declare class TeamsController {
    private readonly teamsService;
    private readonly playersService;
    constructor(teamsService: TeamsService, playersService: PlayersService);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    create(team: Partial<Team>): Promise<Team>;
    update(id: number, team: Partial<Team>): Promise<Team>;
    remove(id: number): Promise<void>;
    findPlayersByTeam(id: number): Promise<Player[]>;
}
