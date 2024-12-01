import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketsService {
    findAll(): object {
        return [
            {id: 'uk', market: 'UK'},
            {id: 'es', market: 'ES'},
            {id: 'pt', market: 'PT'},
            {id: 'fr', market: 'FR'},
        ]
    }
}
