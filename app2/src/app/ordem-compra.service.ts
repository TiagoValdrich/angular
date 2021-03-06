import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pedido } from "./shared/pedido.model";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {

    constructor( private http: Http ) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        )
        .pipe(
            map((resposta: Response) => resposta.json().id )
        )
    }

}