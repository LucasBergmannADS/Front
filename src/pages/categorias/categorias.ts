import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { CategoriaService } from '../../services/domain/categoria.service';
=======
>>>>>>> 10c4cd3704f5f31b801f29d1c2aadf9be5d11740

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

<<<<<<< HEAD
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response => { 
      console.log(response);
    },
  error => {
    console.log(error);
  });


  }

 
   
  }


=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
>>>>>>> 10c4cd3704f5f31b801f29d1c2aadf9be5d11740
