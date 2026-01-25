import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTeamDto {
  @ApiProperty({ 
    example: 'Real Madrid',
    description: 'Nombre del equipo',
    required: false
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ 
    example: 'España',
    description: 'País de origen del equipo',
    required: false
  })
  @IsOptional()
  @IsString()
  country?: string;
}
