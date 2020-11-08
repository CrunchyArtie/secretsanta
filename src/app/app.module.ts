import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {askNameComponent} from './ask-name/ask-name.component';
import {AskPwdComponent} from './ask-pwd/ask-pwd.component';
import {AdminComponent} from './admin/admin.component';
import { ShowCheaterComponent } from './show-cheater/show-cheater.component';
import { ShowResultComponent } from './show-result/show-result.component';

@NgModule({
    declarations: [
        AppComponent,
        askNameComponent,
        AskPwdComponent,
        AdminComponent,
        ShowCheaterComponent,
        ShowResultComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
