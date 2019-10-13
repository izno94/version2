import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getAll() {
    return[
      {id : 1 ,
      titre : 'un titre',
      contenu : 'lorem',
      date_creation : '12/05/2015',
      categories: ['SF', 'roman'],
      email_auteur: 'auteur@gmail.com',
      estPublie: 'true'},
      {id : 2 ,
      titre : 'un titre',
      contenu : 'lorem',
      date_creation : '12/05/2015',
      categories: ['SF', 'roman'],
      email_auteur: 'auteur@gmail.com',
      estPublie: 'true'},
      {id : 3 ,
       titre : 'un titre',
       contenu : 'lorem',
       date_creation : '12/05/2015',
       categories: ['SF', 'roman'],
       email_auteur: 'auteur@gmail.com',
       estPublie: 'true'},
      {id : 4 ,
       titre : 'un titre',
       contenu : 'lorem',
       date_creation : '12/05/2015', categories: ['SF', 'roman'], email_auteur: 'auteur@gmail.com', estPublie: 'true'},
      {id : 5 , titre : 'un titre', contenu : 'lorem', date_creation : '12/05/2015', categories: ['SF', 'roman'], email_auteur: 'auteur@gmail.com', estPublie: 'true'},
      {id : 6 , titre : 'un titre', contenu : 'lorem', date_creation : '12/05/2015', categories: ['SF', 'roman'], email_auteur: 'auteur@gmail.com', estPublie: 'true'}
          ];
  }
  get(id) {
 const article = this.getAll().find( (article) => {
  if ( article.id == id) {
  return article;
  }

 } ) ;

 if (!article) { return{}; }
 return article;

}
  getFromTo(numPage ?: number, nbArticleParPage ?: number) {
   const vraisNumeroPage = numPage || 0;
   const vraisNbArticleParPage = nbArticleParPage || 2 ;
   return this.getAll().slice(
       vraisNumeroPage * vraisNbArticleParPage ,
       vraisNumeroPage * vraisNbArticleParPage + vraisNbArticleParPage
       );

  }




}
