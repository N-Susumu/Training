import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-dialog-component',
    templateUrl: './dialog.component.html'
})

export class DialogComponent {

    constructor(
        private matDialog: MatDialog
    ) {
        // Dialog Constructor.
    }

}
