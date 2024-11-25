import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Protocolo } from '../../Interfaces/protocolo';
import { ApiService } from '../../services/api-comunica.service'; 


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  formulario: FormGroup;
  protocolo: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)9\d{4}-\d{4}$/)]],
      logradouro: ['', Validators.required],
      referencia: [''],
      tipoLampada: ['', Validators.required],
      tipoProblema: ['', Validators.required],
    });
  }

  /**
   * Formata o CPF conforme o usuário digita.
   * Exemplo: "12345678909" -> "123.456.789-09"
   */
  formatCpf(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (value.length > 3) {
      value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (value.length > 6) {
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (value.length > 9) {
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }

    input.value = value; // Atualiza o valor do input
    this.formulario.controls['cpf'].setValue(value); // Atualiza o valor no formulário
  }
/**
   * Formata o telefone conforme o usuário digita.
   * Exemplo: "11999999999" -> "(11)99999-9999"
   */
formatTelefone(event: Event) {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, ''); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d)/, '($1)$2'); // Adiciona os parênteses ao DDD
  }
  if (value.length > 7) {
    value = value.replace(/(\d{5})(\d{4})/, '$1-$2'); // Adiciona o traço no número
  }

  input.value = value; // Atualiza o valor do input
  this.formulario.controls['telefone'].setValue(value); // Atualiza o valor no formulário
}

  onSubmit() {
    if (this.formulario.valid) {
      const protocoloData:Protocolo= this.formulario.value;
      
      this.apiService.enviarProtocolo(protocoloData).subscribe(
        (response) => {
          this.protocolo = response.protocolo;
        },
        (error) => {
          console.error('Erro ao gerar protocolo:', error);
          alert('Erro ao gerar o protocolo. Tente novamente mais tarde.');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
