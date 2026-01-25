import { PlayersService } from './players.service';
import { Player } from '../entities/player.entity';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    create(player: Partial<Player>): Promise<Player>;
    update(id: number, player: Partial<Player>): Promise<Player>;
    remove(id: number): Promise<void>;
}
