import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todos los equipos',
    type: [Team]
  })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Equipo encontrado',
    type: Team
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ 
    status: 201, 
    description: 'Equipo creado exitosamente',
    type: Team
  })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo existente' })
  @ApiParam({ name: 'id', description: 'ID del equipo a actualizar', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Equipo actualizado exitosamente',
    type: Team
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo a eliminar', type: Number })
  @ApiResponse({ status: 200, description: 'Equipo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.remove(id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener todos los jugadores de un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: Number })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de jugadores del equipo'
  })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findPlayersByTeam(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findPlayersByTeam(id);
  }
}
