import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {PlayersService} from '../players.service';
import {CurrentPlayerService} from '../current-player.service';
import {StateService} from '../state.service';

@Component({
  selector: 'app-ask-pwd',
  templateUrl: './ask-pwd.component.html',
  styleUrls: ['./ask-pwd.component.scss']
})
export class AskPwdComponent implements OnInit {

    form: FormGroup;
    get currentPlayerName(): string {
        return this.currentPlayerService.currentPlayer.name;
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
            key: ['', Validators.required]
        });

    }

    onSubmit() {
        this.currentPlayerService.givenKey = this.form.value.key;
        this.stateService.goNext();
    }

    public goPrevious() {
        return this.stateService.goPrevious();
    }
}
