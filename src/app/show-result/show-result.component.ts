import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../players.service';
import {CurrentPlayerService} from '../current-player.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {
    get associatedPlayer(): string {
        return this.playersService.getAssociated(this.currentPlayerService.currentPlayer).name;
    };

  constructor(private playersService: PlayersService, private currentPlayerService: CurrentPlayerService) { }

  ngOnInit(): void {
  }

}
