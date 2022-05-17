import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConectorsService } from './conectors.service';
import { CreateConectorDto } from './dto/create-conector.dto';
import { UpdateConectorDto } from './dto/update-conector.dto';

@Controller('conectors')
export class ConectorsController {
  constructor(private readonly conectorsService: ConectorsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createConectorDto: CreateConectorDto) {
    return this.conectorsService.create(createConectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('name') name: string,
    @Query('category') category: string,
    @Query('type') type: 'REST' | 'BD' | 'SOAP',
    @Query('privacity') privacity: 'PUBLIC' | 'PRIVATE',
  ) {
    return this.conectorsService.findAll({ name, category, type, privacity });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conectorsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConectorDto: UpdateConectorDto,
  ) {
    return this.conectorsService.update(id, updateConectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conectorsService.remove(id);
  }
}
