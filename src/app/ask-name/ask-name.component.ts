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
    private isValidPlayerName = (control: AbstractControl) => {
        if (this.playersService
            .players
            .map(p => this.slugify(p.name.toLowerCase()))
            .includes(this.slugify(control.value.toLowerCase()))) {
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
            name: ['', Validators.required, this.isValidPlayerName]
        });

    }

    onSubmit() {
        this.currentPlayerService.currentPlayer =
            this.playersService.players
                .find(p => this.slugify(p.name.toLocaleLowerCase()) === this.slugify(this.form.value.name.toLocaleLowerCase()));
        this.stateService.goNext();
    }

    slugify(str: string) {
        const map = {
            '-': ' ',
            // '-': '_',
            'a': 'á|à|ã|â|À|Á|Ã|Â',
            'e': 'é|è|ê|É|È|Ê',
            'i': 'í|ì|î|Í|Ì|Î|ï',
            'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
            'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
            'c': 'ç|Ç',
            'n': 'ñ|Ñ'
        };

        for (let pattern in map) {
            str = str.replace(new RegExp(map[pattern], 'g'), pattern);
        }

        return str;
    };
}
