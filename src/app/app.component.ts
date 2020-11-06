import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {Md5} from 'ts-md5';
import {AppState} from './appState';
import {PlayersService} from './players.service';
import {StateService} from './state.service';

const seed = 7

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private playersService: PlayersService, private stateService: StateService) {

    }

    ngOnInit(): void {
        const md5 = new Md5();

        this.playersService.players = this.playersService.players.map(p => {
            p.crypt = md5.appendStr(p.id + p.name).end().toString();
            return p;
        });

    }

    //     case (AppState.AskPwd): {
    //       this.form = this.formBuilder.group({
    //         key: ['', Validators.required]
    //       });
    //     }

    // public canGoPrevious() {
    //     switch (this.state) {
    //         case AppState.AskPwd: {
    //             return true
    //         }
    //     }
    //
    //     return false;
    // }

    // public canGoNext() {
    //     switch (this.state) {
    //         case AppState.AskName: {
    //             return this.form.valid
    //         }
    //         case AppState.AskPwd: {
    //             return this.form.valid
    //         }
    //     }

        // return false;

    // }

    // public onSubmit() {
    //     switch (this.state) {
    //         case AppState.AskName: {
    //             this.state = AppState.AskPwd;
    //         }
    //     }
    // }
    //
    // public onPrevious() {
    //     switch (this.state) {
    //         case AppState.AskPwd: {
    //             this.initForm(AppState.AskName)
    //             this.state = AppState.AskName;
    //         }
    //
    //     }
    // }
    get currentState(): AppState {
        return this.stateService.currentState;
    }

}
