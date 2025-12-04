import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InversionistasService } from '../services/inversionistas.service';

@Component({
  selector: 'app-inversionista-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inversionista-detalle.component.html',
  styleUrl: './inversionista-detalle.component.css'
})
export class InversionistaDetalleComponent implements OnInit {

  inversionista: any = {};
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InversionistasService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargar();
  }

  cargar() {
    this.service.getById(this.id).subscribe((data: any) => {
      this.inversionista = data;
    });
  }

  guardar() {
    this.service.update(this.id, this.inversionista).subscribe(() => {
      alert('Guardado correctamente');
      this.router.navigate(['/']);
    });
  }

  eliminar() {
    if (confirm("¿Seguro que deseas eliminar este inversionista?")) {
      this.service.delete(this.id).subscribe(() => {
        alert('Eliminado');
        this.router.navigate(['/']);
      });
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.inversionista.imagen_base64 = reader.result;
    };

    reader.readAsDataURL(file);
  }

  

  volver() {
    this.router.navigate(['/']);
  }
}
