import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiaDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-noticia-detalhe',
  templateUrl: 'noticia-detalhe.html',
})
export class NoticiaDetalhePage {

 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  

  ionViewDidLoad() {
    //console.log(this.navParams.data.titulo);
  }

}
