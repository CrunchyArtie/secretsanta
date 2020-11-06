import {Injectable} from '@angular/core';
import {Player} from './player';

@Injectable({
    providedIn: 'root'
})
export class CurrentPlayerService {
    public currentPlayer: Player;
    public givenKey: string;

    constructor() {
    }
}
