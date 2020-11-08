import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../players.service';
import {StateService} from '../state.service';
import {CurrentPlayerService} from '../current-player.service';
import {Player} from '../player';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    public players: { from: Player; to: Player; by: string }[];

    public get canGoPrevious(): boolean {
        return this.stateService.canGoPrevious();
    }

    public get canGoNext(): boolean {
        return this.stateService.canGoNext();
    }

    constructor(
        private playersService: PlayersService,
        private currentPlayerService: CurrentPlayerService,
        private stateService: StateService
    ) {
    }

    ngOnInit(): void {
        this.players = this.playersService.associatedPlayer.slice();
    }

    goPrevious() {
        return this.stateService.goPrevious();
    }

    goNext() {
        return this.stateService.goNext();
    }
}
