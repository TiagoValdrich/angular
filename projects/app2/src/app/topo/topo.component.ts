import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe( // retorno Oferta[]
      debounceTime(1000), // executa a acao do switchMap apos 1 segundo 
      distinctUntilChanged(),
      switchMap((termo: string) => {

        if(termo.trim() === ''){
          return of<Oferta[]>([])
        }
          return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError(
        (err: any) => {
          return of<Oferta[]>([])
        }
      )
    )    

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )

  }

  public pesquisa = (termoDaBusca: string): void => {
    this.subjectPesquisa.next(termoDaBusca)

    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status: ', erro.status),
    //   () => console.log('Fluxo de Eventos completo!')
    // )
  }

}
