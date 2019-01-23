import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class OfertasService {

    constructor(private http: Http) {}   

    public getOfertas(): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((response: Response) => response.json())
    }

    public getOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((response: Response) => {
                return response.json()[0]
            })
    }

    public getComoUsarOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((response: Response) => {
                return response.json().shift().descricao
            })
    }

    public getOndeFicaOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((response: Response) => {
                return response.json().shift().descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<any> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(
                retry(10),
                map( (resposta: Response) => resposta.json()) 
            )
    }
}