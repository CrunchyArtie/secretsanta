import {Injectable} from '@angular/core';
import {Player} from './player';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    public players: Player[] = [
        {id: 0, name: 'Romane', crypt: ''},
        {id: 1, name: 'Marine', crypt: ''},
        {id: 2, name: 'Justine', crypt: ''},
        {id: 3, name: 'Faustine', crypt: ''},
        {id: 4, name: 'Adélaïde', crypt: ''},
        {id: 5, name: 'Florance', crypt: ''},
    ];

    constructor() {
    }
}
