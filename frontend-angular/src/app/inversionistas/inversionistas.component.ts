import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inversionistas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './inversionistas.component.html',
  styleUrl: './inversionistas.component.css'
})
export class InversionistasComponent implements OnInit {

  form!: FormGroup;
  inversionistas: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      inversion: [0, [Validators.required, Validators.min(1)]]
    });

    this.listar();
  }

  guardar() {
    this.http.post('http://localhost:3000/inversionista', this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.listar();
      });
  }

  listar() {
    this.http.get<any[]>('http://localhost:3000/inversionista')
      .subscribe(data => this.inversionistas = data);
  }
}
