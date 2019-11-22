import { Component } from '@angular/core';
import { CatImagesService } from '../cat-images.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [CatImagesService]
})
export class HomePage {
  catList: any; // Variável para receber o JSON do serviço CAT-IMAGES
  catImgList = []; // Variável para armazenar apenas as imagens da lista JSON
  view: number = 1 ; //controla as telas de cada tipo de visualização

  constructor(private cats: CatImagesService) {
    this.cats.getCats().subscribe(res => {
      this.catList = res;
      for (const item of this.catList) {
        if(item.images) {
          for (const img of item.images) {
            if (img.link.includes('jpg') || img.link.includes('png')) {
              const dados = {
                title: item.title,
                link: img.link
              }
              this.catImgList.push(dados);
            }
          }
        }
      }
      });
  }
  private changeView(view: number) {
    this.view = view;
  }
}
