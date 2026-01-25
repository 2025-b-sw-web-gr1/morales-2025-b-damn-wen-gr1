import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({ 
    example: 'Lionel Messi',
    description: 'Nombre del jugador'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ 
    example: 'Delantero',
    description: 'Posición del jugador en el campo'
  })
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty({ 
    example: 36,
    description: 'Edad del jugador'
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(15)
  age: number;

  @ApiProperty({ 
    example: 1,
    description: 'ID del equipo al que pertenece el jugador'
  })
  @IsNotEmpty()
  @IsNumber()
  teamId: number;
}
