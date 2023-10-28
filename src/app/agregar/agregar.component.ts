import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  formData = new FormGroup({
    documento: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(10)
    ])),
    comercio: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.compose([
      Validators.required, Validators.email
    ])),
  });

  constructor(private apiService: ApiService) {
  }

  guardarDatos() {
    if (this.formData.valid) {
      const data = this.formData.value;
      console.log(data); // Muestra los datos en la consola

      this.apiService.postData(data).subscribe(
        (response) => {
          console.log('Datos enviados con éxito a la API:', response);
          // Realiza cualquier acción adicional después de enviar los datos, si es necesario.
        },
        (error) => {
          console.error('Error al enviar datos a la API:', error);
        }
      );
    }
  }
}
