import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Md5 } from 'ts-md5';

interface Player {
  id: number,
  name: string;
  crypt: string;
}

enum AppState {
  Admin = 'Admin',
  AskName = 'AskName',
  AskPwd = 'AskPwd',
  ShowResult = 'ShowResult',
  ShowCheate = 'ShowCheater'
}

const seed = 7

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public state: AppState = AppState.AskName;
  public currentPlayerName: string = '';
  private players: Player[] = [];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.players = [
      { id: 0, name: 'Romane', crypt: '' },
      { id: 1, name: 'Marine', crypt: '' },
      { id: 2, name: 'Justine', crypt: '' },
      { id: 3, name: 'Faustine', crypt: '' },
      { id: 4, name: 'Adélaïde', crypt: '' },
      { id: 5, name: 'Florance', crypt: '' },
    ]

    const md5 = new Md5();

    this.players = this.players.map(p => {
      p.crypt = md5.appendStr(p.id + p.name).end().toString();
      return p;
    })

    this.initForm(this.state);
  }

  private initForm(state: AppState) {
    switch (state) {
      case (AppState.AskName): {
        this.form = this.formBuilder.group({
          name: [this.currentPlayerName, Validators.required, (control: AbstractControl) =>
            of(this.players.map(p => p.name.toLowerCase()).includes(control.value.toLowerCase()) ? null: { 'notPlayerNameValue': true })
          ]
        });
      }
      case (AppState.AskPwd): {
        this.form = this.formBuilder.group({
          key: ['', Validators.required]
        });
      }
    }
  }

  public canGoPrevious() {
    switch (this.state) {
      case AppState.AskPwd: {
        return true
      }
    }

    return false;
  }

  public canGoNext() {
    switch (this.state) {
      case AppState.AskName: {
        return this.form.valid
      }
      case AppState.AskPwd: {
        return this.form.valid
      }
    }

    return false;

  }

  public onSubmit() {
    switch (this.state) {
      case AppState.AskName: {
        this.state = AppState.AskPwd;
      }
    }
  }

  public onPrevious() {
    switch (this.state) {
      case AppState.AskPwd: {
        this.initForm(AppState.AskName)
        this.state = AppState.AskName;
      }

    }
  }

}
