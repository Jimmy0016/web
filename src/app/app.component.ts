import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://lastfm.freetls.fastly.net/i/u/300x300/9927161141cefbcf5154d9afba56da57.jpg',
    'https://m.media-amazon.com/images/I/71l8BYJfKjL._UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/91syKF4LFiL._UF1000,1000_QL80_.jpg',
    'https://udiscover.mx/cdn/shop/collections/60e0f5e8794ae0650bfe72e4c0eee010.jpg?v=1726790880',
    'https://lastfm.freetls.fastly.net/i/u/300x300/fd080fa4080243f94e0ddab8d43e41e1.jpg',
    'https://akamai.sscdn.co/uploadfile/letras/albuns/6/9/b/9/01653656452.jpg'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
