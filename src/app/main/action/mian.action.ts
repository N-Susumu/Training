import { Injectable } from '@angular/core';
import { ConnectTestApiEntity } from '../entity/main.entity';
import { createAction, Action } from '@ngrx/store';

export const increment = createAction('[Dispatch Test] Increment');
export const decrement = createAction('[Dispatch Test] Decrement');
export const reset = createAction('[Dispatch Test] Reset');
// REST クライアント実装ののためのサービスを import ( 下記は Angular 5.0.0 で非推奨となった )
// import { Http } from '@angular/http';

// REST クライアント実装ののためのサービスを import ( Angular 5.0.0 以降はこちらを使う )
import { HttpClient, HttpHeaders } from '@angular/common/http';

export enum MainActionTypes {
  Main = '[Main] Test'
}

export class Main implements Action {
  readonly type = MainActionTypes.Main;

  constructor(public payload: string ) {}
}

export type MainActions = Main;

@Injectable()
export class MainAction {
  public connectTestApiEntity: ConnectTestApiEntity;

  // `Headers` の代わりに `HttpHeaders` を利用する
  // またコメントにあるとおり、 `Authorization` を設定できるように `httpOptions` としてオブジェクトでラップしている
  // 参考
  // https://angular.jp/guide/http#%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
        // 'Content-Type': 'text/html'
      'Content-Type': 'application/json'
    }),
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null
  };

  /**
   * RST-API 実行時に指定する URL
   *
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   *
   */
  // private host = 'http://localhost:4200/webHello';
  private host = 'http://localhost:4200';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   *
   */
  constructor(private http: HttpClient) {
    // `Authorization` に `Bearer トークン` をセットする
    this.setAuthorization('my-auth-token');
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   */
  public getWebHello(): Promise<any[]> {

    return this.http.get(this.host + '/webHello/ShowDate', this.httpOptions)
    .toPromise()
    .then((res) => {
      // response の型は any ではなく class で型を定義した方が良いが
      // ここでは簡便さから any としておく

      // @angular/http では json() でパースする必要があったが､ @angular/common/http では不要となった
      // const response: any = res.json();
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  public getWebApi() {
    this.http.get(this.host + '/LocalServerWebApi/ConnectTest', this.httpOptions)
    .subscribe((data: any) => {
      console.log((data.map as ConnectTestApiEntity).A);
    });
    // this.http.get<ConnectTestApiEntity>(
    //   this.host + '/LocalServerWebApi/ConnectTest')
    // .subscribe(response => {
    //   console.log(response);
    //   console.log(response.A);
    // });
  }
/*
  public getWebApi(): Promise<any[]> {
    return this.http.get(this.host + '/LocalServerWebApi/ConnectTest', this.httpOptions)
    .toPromise()
    .then((res) => {
      // response の型は any ではなく class で型を定義した方が良いが
      // ここでは簡便さから any としておく

      // @angular/http では json() でパースする必要があったが､ @angular/common/http では不要となった
      // const response: any = res.json();

      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }
*/
  /**
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   */
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  /**
   * Authorizatino に認証トークンを設定しする
   *
   * @description
   * トークンを動的に設定できるようメソッド化している
   * Bearer トークンをヘッダに設定したい場合はこのメソッドを利用する
   */
  public setAuthorization(token: string = null): void {
    if (!token) {
      return;
    }
    const bearerToken = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }
}
