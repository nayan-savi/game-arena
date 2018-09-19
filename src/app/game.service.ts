import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGameArena } from './GameArena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //public _gameUrl = "http://starlord.hackerearth.com/gamesext";
  public _gameUrl = "./assets/data/gamedetails.json";
  constructor(private http :  HttpClient) { }

  getGameDetails(): Observable<IGameArena[]>{
    return this.http.get<IGameArena[]>(this._gameUrl);
  }
}
