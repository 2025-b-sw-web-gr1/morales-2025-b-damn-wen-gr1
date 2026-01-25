import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { Player } from '../entities/player.entity';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Player> {
    return this.playersService.findOne(id);
  }

  @Post()
  create(@Body() player: Partial<Player>): Promise<Player> {
    return this.playersService.create(player);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() player: Partial<Player>,
  ): Promise<Player> {
    return this.playersService.update(id, player);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.playersService.remove(id);
  }
}
