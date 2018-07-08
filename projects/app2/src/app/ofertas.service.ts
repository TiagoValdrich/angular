import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}   

    public getOfertas(): Promise<any> {
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta: any) => {
                resposta.json()
            })
    }
}