import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http'
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CustomFilterPipe } from './custom-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
