import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public gamesDetails: Object;
  public title = 'Games Arena';
   
  constructor(private gameArena : GameService) { 
    this.gameArena.getGameDetails()
      .subscribe(data => this.gamesDetails = data.sort(function(a, b){
        if(a.score < b.score){
            return 1;
        }
        else if( a.score > b.score){
            return -1;
        }
        else{
            return 0;
        }
    }));
  }

  ngOnInit() {
    
  }

}
