import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SoapServiceProvider {
    private url: string = 'https://www.mitraonline.com.br/wsictmpvinhedo/services/wsictm-dev.php';

    constructor(public http: HttpClient) {}

    consultarPessoa(codPessoa) {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/xml');
        headers.set('Access-Control-Allow-Origin', '*');

        return this.http.get(`${this.url}?codigo_pessoa=${codPessoa}`, {
            headers: headers,
            responseType: 'text'
        });

    }
}
