import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Update } from '@ngrx/entity';

import { Main, MainActionTypes } from '../action/mian.action';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConnectTestApiEntity } from '../entity/main.entity';

@Injectable()
export class ChatEffects {
  public connectTestApiEntity: ConnectTestApiEntity;

  constructor(
    private actions$: Actions,
    private http: HttpClient) {
  }

  @Effect()
  Main$ =
    this.actions$.pipe(
      ofType<Main>(MainActionTypes.Main),
      map(action => {
        console.log(action.payload);
        return this.getWebApi();
      })
    );

    public getWebApi() {
      const host = 'http://localhost:4200';
      const httpOptions: any = {
        // ヘッダ情報
        headers: new HttpHeaders({
            // 'Content-Type': 'text/html'
          'Content-Type': 'application/json'
        }),
        // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
        // ( ここで用意しなくても追加できるけど... )
        body: null
      };
      this.http.get(host + '/LocalServerWebApi/ConnectTest', httpOptions)
      .subscribe((data: any) => {
        console.log((data.map as ConnectTestApiEntity).A);
        return data;
      });
    }
}
