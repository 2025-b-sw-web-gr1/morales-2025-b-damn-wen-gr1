import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';
export declare class TeamsService {
    private teamsRepository;
    constructor(teamsRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    create(team: Partial<Team>): Promise<Team>;
    update(id: number, team: Partial<Team>): Promise<Team>;
    remove(id: number): Promise<void>;
}
