import {Injectable} from '@angular/core';
import {AppState} from './appState';
import {CurrentPlayerService} from './current-player.service';
import {PlayersService} from './players.service';
import {Player} from './player';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    public currentState = AppState.AskName;
    public crackerTime = false;

    get showHat(): boolean {
        if(this.currentState !== AppState.ShowResult) {
            return true
        } else {
            return this.crackerTime === false;
        }
    }

    constructor(
        private currentPlayerService: CurrentPlayerService,
        private playersService: PlayersService
    ) {
    }

    goNext() {
        switch (this.currentState) {
            case AppState.AskName: {
                this.currentState = AppState.AskPwd;
                return;
            }
            case AppState.AskPwd: {
                if (this.isAdmin() && this.getAdmin().crypt === this.currentPlayerService.givenKey) {
                    this.currentState = AppState.Admin;
                } else if (this.currentPlayerService.currentPlayer.crypt === this.currentPlayerService.givenKey) {
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
            case AppState.Admin:
                return true;
            case AppState.AskName:
                return false;
            case AppState.AskPwd:
                return true;
            case AppState.ShowCheater:
                return true;
        }
    }

    canGoNext() {
        switch (this.currentState) {
            case AppState.Admin:
                return false;
            case AppState.AskName:
                return true;
            case AppState.AskPwd:
                return true;
        }
    }

    private isAdmin(): boolean {
        return this.getAdmin().name === this.currentPlayerService.currentPlayer.name;
    }

    private getAdmin(): Player {
        return this.playersService.players.find(p => p.name === 'Arthur');
    }

    public goPrevious() {
        switch (this.currentState) {
            case AppState.Admin:
            case AppState.ShowCheater:
            case AppState.AskPwd: {
                    this.currentState = AppState.AskName;
                return;
            }
        }

    }
}
