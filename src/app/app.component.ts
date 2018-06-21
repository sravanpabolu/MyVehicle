import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items: FirebaseListObservable<any[]>;

  constructor(afdb: AngularFireDatabase) {
    this.items = afdb.list('/VehicleSummary');
    console.log(this.items);
  }
}
