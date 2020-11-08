import {Component, OnInit} from '@angular/core';
import {StateService} from '../state.service';

@Component({
    selector: 'app-show-cheater',
    templateUrl: './show-cheater.component.html',
    styleUrls: ['./show-cheater.component.scss']
})
export class ShowCheaterComponent implements OnInit {
    get canGoPrevious(): boolean {
        return this.stateService.canGoPrevious();
    }

    constructor(private stateService: StateService) {
    }

    ngOnInit(): void {
    }

    goPrevious() {
        return this.stateService.goPrevious()
    }
}
