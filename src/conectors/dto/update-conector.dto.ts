import { PartialType } from '@nestjs/mapped-types';
import { CreateConectorDto } from './create-conector.dto';

export class UpdateConectorDto extends PartialType(CreateConectorDto) {}
