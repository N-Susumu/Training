import { Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { MainAction } from '../action/mian.action';
import { IgxCalendarComponent } from 'igniteui-angular';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { SubmitEntity } from './../entity/main.entity';
import { formatDate, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import * as mainReducer from '../reducer/main.reducer';
import { Main } from '../action/mian.action';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
    title = 'my-app';

    @ViewChild('calendar', { read: IgxCalendarComponent, static: false }) public calendar: IgxCalendarComponent;

    public exampleOptions: FlatpickrOptions = {
      defaultDate: new Date(),
      dateFormat: 'Y/m/d'
    };

    public pageTitle = '管理者メイン';
    public WIN_RISIZE = 'resizeTo';
    private WIN_SIZE_WIDTH = 1350;
    private WIN_SIZE_HEIGHT = 910;
    public LINK_LABEL = 'Link TEST';
    public LINK_LABEL2 = 'Http Service';
    public NEXT_PAGE_LABEL = 'To Next';
    public costOption: string;
    public SELECT_OPTION = [
      {label: '食費', value: '0'}
    ];
    public cost: number;
    public submitEntity = new SubmitEntity();
    public oldLogContentsList: any;
    public searchTargetOldDoc = [new Date()];

    constructor(private router: Router,
                private action: MainAction,
                private datePipe: DatePipe,
                private store: Store<mainReducer.State>) {
    }

    public ngOnInit() {
        // 初期表示時にメインサイズを調整
        window[this.WIN_RISIZE](this.WIN_SIZE_WIDTH, this.WIN_SIZE_HEIGHT);
        this.oldLogContentsList = [
            {
                title : '過去投稿1',
                uploadDate : '20**/**/**',
                link : ''
            }
        ];
        for (let i = 0; i < 9; i++) {
          this.oldLogContentsList.push(this.oldLogContentsList[0]);
        }
    }

    public click(flg) {
        console.log('click');
        const javascriptFuncName = 'topJavascript';
        if (flg === '1') {
          window[javascriptFuncName]('childWindow', 'http://localhost:4200/main?flag=1');
        } else {
          window[javascriptFuncName]('childWindow', 'http://localhost:4200/main?flag=2');
        }
    }

    public httpService2() {
      this.action.getWebHello()
      .then(
        (response) => {
          console.log('SCCESS');
          console.log(response);
        }
      )
      .catch(
        (error) => console.log(error)
      );
    }

    public httpService() {
      console.log('dispacher Start');
      this.store.dispatch(new Main('Comment'));
      console.log(this.store);
      console.log('dispacher End');
      this.action.getWebApi();
      // .then(
      //   (response) => {
      //     console.log('SCCESS2');
      //     console.log(response);
      //   }
      // )
      // .catch(
      //   (error) => console.log(error)
      // );
    }

    public toNextPage() {
        this.router.navigate(['next']);
    }

    public changeMethod() {
      alert('Calendar');
    }

    public oldDocumentSearch(target: any) {
      console.log('oldDocumentSearch');
      console.log(this.datePipe.transform(new Date(target[0]), 'yyyy/MM/dd'));
    }

    public submit() {
      // this.submitEntity.costOption = this.costOption;
      // this.submitEntity.cost = this.cost;
      console.log(this.submitEntity);
      // alert('Submit');
      const url = window.location.href;
      const winName = [];
      for (let i = 0; i < 7; i++) {
        winName.push('TEST' + i);
        // const w = window.open('', winName[i], 'width=1px,height=1px');
        // if (w.location.href !== 'about:blank') {
        //   w.close();
        // }
        window.open(url, winName[i], 'width=1px,height=1px');
      }
    //   setTimeout(() => {
    //       for (let i = 0; i < 5; i++) {
    //         console.log(winName[i]);
    //         const winObj = window.open('', winName[i], '');
    //         if (winObj.closed === undefined) {
    //           setTimeout(() => {
    //             if (winObj.closed !== undefined) {
    //               winObj.close();
    //             }
    //           }, 5000);
    //         } else {
    //           winObj.close();
    //         }
    //       }
    //     } , 10000);
    }
}
