import { Component } from '@angular/core';
import { FormsComponent } from "../../Components/forms/forms.component";
import { ApiService } from "../../services/api-comunica.service";

@Component({
  selector: 'app-relato',
  standalone: true, // Adicione esta linha
  imports: [
    FormsComponent,
  ],
  templateUrl: './relato.component.html',
  styleUrl: './relato.component.css'
})
export class RelatoComponent {
  constructor(private apiService: ApiService) {}
}