import { Team } from './team.entity';
export declare class Player {
    id: number;
    name: string;
    position: string;
    teamId: number;
    team: Team;
}
