import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MarketsService } from './markets.service';

@ApiTags('Markets') // Додаємо тег до контролера
@Controller('markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all markets' })
  findAll() {
    return this.marketsService.findAll();
  }
}
