import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component'; // Asegúrate de que esta ruta sea correcta
import { CommonModule } from '@angular/common';

interface Reporte {
  id: number;
  mes: string;
  usos: number;
  cobrado: string;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  styleUrls: ['./reportes.component.scss'] // Opcional, si decides usar un archivo SCSS
})
export class ReportesComponent {

  reportes: Reporte[] = [
    { id: 1, mes: '2024/10', usos: 12, cobrado: '$4800' },
    { id: 2, mes: '2024/11', usos: 18, cobrado: '$15000' },
    { id: 3, mes: '2024/12', usos: 14, cobrado: '$6200' },
    { id: 4, mes: '2025/01', usos: 19, cobrado: '$5100' },
    { id: 5, mes: '2025/02', usos: 11, cobrado: '$7000' },
    { id: 6, mes: '2025/03', usos: 9, cobrado: '$9000' },
    { id: 7, mes: '2025/04', usos: 20, cobrado: '$23000' },
    { id: 8, mes: '2025/05', usos: 17, cobrado: '$16000' },
    { id: 9, mes: '2025/06', usos: 25, cobrado: '$25000' }
];

}
