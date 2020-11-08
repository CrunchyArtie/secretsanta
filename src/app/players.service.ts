import {Injectable} from '@angular/core';
import {Player} from './player';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    readonly factor = 3;

    public players: Player[] = [
        {id: 0, name: 'Arthur', crypt: ''},
        {id: 1, name: 'Romane', crypt: ''},
        {id: 2, name: 'Marine', crypt: ''},
        {id: 3, name: 'Justine', crypt: ''},
        {id: 4, name: 'Faustine', crypt: ''},
        {id: 5, name: 'Adélaïde', crypt: ''},
        {id: 6, name: 'Florance', crypt: ''},
    ];

    public get associatedPlayer(): {from: Player, to: Player, by: string}[] {
        return this.players.filter(p => p.name !== 'Arthur').map(p => {
            const ap = this.getAssociated(p);
            return {from: p, to: ap, by: p.crypt + ap.crypt}
        })
    }

    constructor() {
    }

    public getAssociated(p: Player): Player {
        return this.players.filter(p => p.name !== 'Arthur')[(p.id + this.factor) % (this.players.length-1) ]
    }
}
