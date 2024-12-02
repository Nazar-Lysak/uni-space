import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketsService {
    findAll(): object {
        return [
            {value: 'UK', market: 'uk'},
            {value: 'ES', market: 'es'},
            {value: 'PT', market: 'pt'},
            {value: 'FR', market: 'fr'},
            {value: 'UA', market: 'ua'},
            {value: 'PL', market: 'pl'},
            {value: 'BE', market: 'be'},
            {value: 'NL', market: 'nl'},
            {value: 'IL', market: 'il'},
            {value: 'BG', market: 'bg'},
            {value: 'IT', market: 'it'},
            {value: 'LT', market: 'lt'},
        ]
    }
}
