import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './weather-forecast/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {InputComponent} from './weather-forecast/input/input.component';
import {MatInputModule} from "@angular/material/input";
import {ButtonComponent} from './weather-forecast/button/button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CardsComponent} from './weather-forecast/cards/cards.component';
import {MatCardModule} from "@angular/material/card";
import {FavoritesComponent} from './favorites/favorites.component';
import {WeatherForecastComponent} from './weather-forecast/weather-forecast.component';
import { CardsFavoritesComponent } from './favorites/cards-favorites/cards-favorites.component';

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        InputComponent,
        ButtonComponent,
        CardsComponent,
        FavoritesComponent,
        WeatherForecastComponent,
        CardsFavoritesComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
