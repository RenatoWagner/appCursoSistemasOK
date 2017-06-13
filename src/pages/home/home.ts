import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { NavController } from 'ionic-angular';
//import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    }


}
