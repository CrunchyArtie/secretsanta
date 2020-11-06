import {Injectable} from '@angular/core';
import {AppState} from './appState';
import {CurrentPlayerService} from './current-player.service';
import {PlayersService} from './players.service';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    public currentState: AppState = AppState.AskName;

    constructor(private currentPlayerService: CurrentPlayerService) {
    }

    goNext() {
        switch (this.currentState) {
            case AppState.AskName: {
                this.currentState = AppState.AskPwd;
                return;
            }
            case AppState.AskPwd: {
                if(this.currentPlayerService.currentPlayer.crypt === this.currentPlayerService.givenKey) {
                    this.currentState = AppState.ShowResult;
                } else {
                    this.currentState = AppState.ShowCheater;
                }
                return;
            }
        }
    }

    canGoPrevious() {
        switch (this.currentState) {
            case AppState.AskName: return false;
            case AppState.AskPwd: return true;
        }
    }

    canGoNext() {
        switch (this.currentState) {
            case AppState.AskName: return true;
            case AppState.AskPwd: return true;
        }
    }
}
