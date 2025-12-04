import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-inversionistas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './listado-inversionistas.component.html',
  styleUrl: './listado-inversionistas.component.css'
})
export class ListadoInversionistasComponent implements OnInit {
  
  inversionistas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.http.get<any[]>('http://localhost:3000/inversionistas')
      .subscribe(data => this.inversionistas = data);
  }

  listarMayor() {
    this.http.get<any[]>('http://localhost:3000/inversionista/mayor')
      .subscribe(data => this.inversionistas = data);
  }

}
