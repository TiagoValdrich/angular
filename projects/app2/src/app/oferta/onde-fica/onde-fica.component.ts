import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor( 
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {

    // Pega os parametros da rota Pai atraves do parent, para ai poder acessa o params
    this.route.parent.params.subscribe((parametro: Params) => {

      this.ofertaService.getOndeFicaOfertaById(parametro.id)
      .then((response: string) => {
        return this.ondeFica = response
      })

    })

  }

}
