import {Component, OnInit} from '@angular/core';
import {Md5} from 'ts-md5';
import {AppState} from './appState';
import {PlayersService} from './players.service';
import {StateService} from './state.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public get showHat(): boolean {
     return this.stateService.showHat;
    }
    constructor(private playersService: PlayersService, private stateService: StateService) {

    }

    ngOnInit(): void {
        const md5 = new Md5();

        this.playersService.players = this.playersService.players.map(p => {
            p.crypt = md5.appendStr(p.id + p.name).end().toString().substr(0,3);
            return p;
        });

        console.log('app.component::ngOnInit::26', this.playersService.players);

    }

    get currentState(): AppState {
        return this.stateService.currentState;
    }

}
