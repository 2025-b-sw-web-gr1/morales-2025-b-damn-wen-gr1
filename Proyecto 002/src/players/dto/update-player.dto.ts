import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, Min } from 'class-validator';

export class UpdatePlayerDto {
  @ApiProperty({ 
    example: 'Cristiano Ronaldo',
    description: 'Nombre del jugador',
    required: false
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ 
    example: 'Delantero',
    description: 'Posición del jugador en el campo',
    required: false
  })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ 
    example: 38,
    description: 'Edad del jugador',
    required: false
  })
  @IsOptional()
  @IsNumber()
  @Min(15)
  age?: number;

  @ApiProperty({ 
    example: 2,
    description: 'ID del equipo al que pertenece el jugador',
    required: false
  })
  @IsOptional()
  @IsNumber()
  teamId?: number;
}
