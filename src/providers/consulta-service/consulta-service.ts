import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from './../../config/environment-dev';
import * as md5 from 'md5';

@Injectable()
export class ConsultaServiceProvider {
    headers: HttpHeaders = new HttpHeaders();
    private url: string = ENV.URL_BASE + ENV.API_URI;

    constructor(public http: HttpClient) {
        this.headers.set('Content-Type', 'application/json');
    }

    login(usuario, senha) {
        let data = {
            usuario: usuario,
            senha: md5(senha)
        };


        return this.http.post(this.url, data, {
            headers: this.headers,
        }).toPromise();
    }

    consultarPessoa(codPessoa) {
        return this.http.get(`${this.url}?codigo=${codPessoa}`, {
            headers: this.headers
        }).toPromise();

    }
}
