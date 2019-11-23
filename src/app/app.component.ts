import { Component, ViewChild } from '@angular/core';
// import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'my-app';

    constructor() {
        // Constructor
        this.setUnload();
    }

    private setUnload() {
        window.onunload = (e) => {
            console.log('**Start event unload**');
            // const mainWin = window.open('', 'testWindow', '');
            // const mainWinSessionStorage = mainWin.sessionStorage;
            // let whileFlg = true;
            // const s = new Date().getTime();
            // while (whileFlg) {
            //     mainWinSessionStorage.setItem('Date', String(new Date()));
            //     const eT = new Date().getTime();
            //     const r = (eT - s);
            //     whileFlg = r > 5000 ? false : true;
            //     console.log(mainWinSessionStorage.getItem('Date'));
            // }
            // mainWin.close();
            console.log('**End event unload**');
        };
    }
}
