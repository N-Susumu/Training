import { Component, OnInit, Input } from '@angular/core';
// import { CommonHeaderAction } from '../action/common-header.action';

@Component({
    // tslint:disable-next-line:component-selector
    selector : 'common-header-component',
    templateUrl : './common-header.component.html'
})

export class CommonHeaderComponent implements OnInit {

    @Input() title: string;
    @Input() backPageUrl: string;
    @Input() nextPageUrl: string;
    public mainTitle = '家計簿メイン';

    constructor() {}

    public ngOnInit() {
        // this.action.initProcess();
    }

    public backWindow() {
        alert('TEST1');
    }

    public goWindow() {
        alert('TEST2');
    }
}
