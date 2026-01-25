import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({ 
    example: 'Barcelona FC',
    description: 'Nombre del equipo'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ 
    example: 'España',
    description: 'País de origen del equipo'
  })
  @IsNotEmpty()
  @IsString()
  country: string;
}
