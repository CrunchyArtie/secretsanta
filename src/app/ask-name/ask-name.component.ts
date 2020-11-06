import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {PlayersService} from '../players.service';
import {CurrentPlayerService} from '../current-player.service';
import {StateService} from '../state.service';

@Component({
    selector: 'app-ask-name',
    templateUrl: './ask-name.component.html',
    styleUrls: ['./ask-name.component.scss']
})
export class askNameComponent implements OnInit {
    form: FormGroup;
    private currentPlayerName: string;
    private isValidPlayerName = (control: AbstractControl) => {
        if (this.playersService
            .players
            .map(p => p.name.toLowerCase())
            .includes(control.value.toLowerCase())) {
            return of(null);
        } else {
            return of({'notPlayerNameValue': true});
        }
    }
    get canGoNext(): boolean {
        return this.form.valid && this.stateService.canGoNext();
    }
    get canGoPrevious(): boolean {
        return this.stateService.canGoPrevious();
    }

    constructor(
        private formBuilder: FormBuilder,
        private playersService: PlayersService,
        private currentPlayerService: CurrentPlayerService,
        private stateService: StateService) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [this.currentPlayerName, Validators.required, this.isValidPlayerName]
        });

    }

    onSubmit() {
        this.currentPlayerService.currentPlayer = this.playersService.players.find(p => p.name === this.currentPlayerName);
        this.stateService.goNext();
    }
}
