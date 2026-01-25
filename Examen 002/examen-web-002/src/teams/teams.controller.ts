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
import { TeamsService } from './teams.service';
import { PlayersService } from '../players/players.service';
import { Team } from '../entities/team.entity';
import { Player } from '../entities/player.entity';

@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly playersService: PlayersService,
  ) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Post()
  create(@Body() team: Partial<Team>): Promise<Team> {
    return this.teamsService.create(team);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() team: Partial<Team>,
  ): Promise<Team> {
    return this.teamsService.update(id, team);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.teamsService.remove(id);
  }

  @Get(':id/players')
  findPlayersByTeam(@Param('id', ParseIntPipe) id: number): Promise<Player[]> {
    return this.playersService.findByTeam(id);
  }
}
