import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';


@Injectable()
export class OfertasService {

    constructor(private http: Http) {}   

    public getOfertas(): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((response: any) => response.json())
    }

    public getOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((response) => {
                return response.json()[0]
            })
    }

    public getComoUsarOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((response: any) => {
                return response.json().shift().descricao
            })
    }

    public getOndeFicaOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((response: any) => {
                return response.json().shift().descricao
            })
    }
}