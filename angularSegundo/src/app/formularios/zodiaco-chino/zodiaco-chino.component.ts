import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco-chino',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco-chino.component.html',
  styles: ``
})
export default class ZodiacoChinoComponent {
  form: FormGroup;
  signoZodiacal: string = '';
  imagenZodiacal: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: [''],
      apellidoP: [''],
      apellidoM: [''],
      dia: [''],
      mes: [''],
      anio: ['']
    });
  }

  calcularSignoChino(anio: number): string {
    const animales = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
    const indice = (anio - 4) % 12;
    return animales[indice];
  }

  calcularEdad(dia: number, mes: number, anio: number): number {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesDiferencia = fechaActual.getMonth() - fechaNacimiento.getMonth();
  
    if (mesDiferencia < 0 || (mesDiferencia === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
  
    return edad;
  }

  obtenerImagenSigno(signo: string): string {
    const imagenes: { [key: string]: string } = {
      'Rata': 'https://images.vexels.com/content/282630/preview/chinese-new-year-rat-zodiac-sign-12a256.png',
      'Buey': 'https://images.vexels.com/content/282632/preview/chinese-new-year-ox-zodiac-sign-d20217.png',
      'Tigre': 'https://images.vexels.com/content/282628/preview/chinese-new-year-tiger-zodiac-sign-ec8305.png',
      'Conejo': 'https://media.todojujuy.com/p/f8a8a76d966e915d49b528e019a04376/adjuntos/227/imagenes/003/271/0003271961/1200x675/smart/proyecto-nuevo-2023-01-28t200543052jpg.jpg',
      'Dragón': 'https://images.vexels.com/content/282629/preview/chinese-new-year-dragon-zodiac-sign-63f731.png',
      'Serpiente': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqNou_vZbFt0MXjfoMQFto5JaSFYNkMCFVQ&s',
      'Caballo': 'https://images.vexels.com/content/282631/preview/chinese-new-year-horse-zodiac-sign-9b7ea8.png',
      'Cabra': 'https://images.vexels.com/media/users/3/283218/isolated/preview/d87d607a05f543aa799e89f152bcfee3-cabra-del-zodiaco-chino-tradicional.png',
      'Mono': 'https://images.vexels.com/content/282634/preview/chinese-new-year-monkey-zodiac-sign-ee2ba9.png',
      'Gallo': 'https://images.vexels.com/content/282638/preview/chinese-new-year-rooster-zodiac-sign-116f3a.png',
      'Perro': 'https://images.vexels.com/content/282639/preview/chinese-new-year-dog-zodiac-sign-448bb5.png',
      'Cerdo': 'https://images.vexels.com/media/users/3/282633/isolated/preview/9f2e7baca8d314ac67ad33563f651763-signo-del-zodiaco-del-cerdo-del-aa-o-nuevo-chino.png'
    };
    return imagenes[signo] || '';
  }

  imprimir(): void {
    const anio = this.form.get('anio')?.value;
    const mes = this.form.get('mes')?.value;
    const dia = this.form.get('dia')?.value;
  
    if (anio && mes && dia && !isNaN(anio) && !isNaN(mes) && !isNaN(dia)) {
      this.signoZodiacal = this.calcularSignoChino(parseInt(anio, 10));
      this.imagenZodiacal = this.obtenerImagenSigno(this.signoZodiacal);
      const edad = this.calcularEdad(parseInt(dia, 10), parseInt(mes, 10), parseInt(anio, 10));
      console.log('Edad:', edad);  // Para verificar el cálculo en la consola
    } else {
      this.signoZodiacal = 'Por favor, introduce una fecha válida.';
      this.imagenZodiacal = '';
    }
  }
}

//Entrega de codigo de Zodiaco atrasado (15 de Octubre) Completado