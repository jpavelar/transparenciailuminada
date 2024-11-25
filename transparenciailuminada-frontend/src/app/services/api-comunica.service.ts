// src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Protocolo } from '../Interfaces/protocolo'; // Importe a interface do modelo

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7217/Api/Report'; // URL da API

  constructor(private http: HttpClient) { }

  // Método para enviar dados do formulário e obter o protocolo
  enviarProtocolo(protocoloData: Protocolo): Observable<{ protocolo: string }> {
    return this.http.post<{ protocolo: string }>(this.apiUrl, protocoloData);
  }
}
