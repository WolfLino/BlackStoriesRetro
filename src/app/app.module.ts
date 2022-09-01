import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardGameComponent } from './shared/components/card-game/card-game.component';
import { CardSelectorComponent } from './modules/card-selector/card-selector.component';
import { HeaderComponent } from './core/headers/header/header.component';
import { ShowCardComponent } from './modules/card-selector/show-card/show-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGameComponent,
    CardSelectorComponent,
    HeaderComponent,
    ShowCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
