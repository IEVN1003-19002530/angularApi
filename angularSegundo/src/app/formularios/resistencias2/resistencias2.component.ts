import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencias2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './resistencias2.component.html',
  styles: ``
})

export default class Resistencias2Component {
  color1: string = '';
  color2: string = '';
  color3: string = '';
  tolerancia: string = '';
  resistencias: any[] = [];
  editIndex: number = -1;
  mostrarTabla: boolean = false;

  colores: string[] = [
    'negro', 'cafe', 'rojo', 'naranja', 'amarillo', 'verde', 'azul', 'morado', 'gris', 'blanco', 'oro', 'plata'
  ];

  constructor() {
    this.cargarLocalStorage();
  }

  operaycolor(color: string): { num: number; bgColor: string } {
    switch (color.toLowerCase()) {
      case 'negro': return { num: 0, bgColor: '#151515' };
      case 'cafe': return { num: 1, bgColor: '#C8A971' };
      case 'rojo': return { num: 2, bgColor: '#F92626' };
      case 'naranja': return { num: 3, bgColor: '#FF8000' };
      case 'amarillo': return { num: 4, bgColor: '#FAED39' };
      case 'verde': return { num: 5, bgColor: '#33D933' };
      case 'azul': return { num: 6, bgColor: '#6872FD' };
      case 'morado': return { num: 7, bgColor: '#683475' };
      case 'gris': return { num: 8, bgColor: '#9F9FA0' };
      case 'blanco': return { num: 9, bgColor: '#F7F7F8' };
      case 'oro': return { num: 0, bgColor: '#EFB810' };
      case 'plata': return { num: 0, bgColor: '#BAB9B4' };
      default: return { num: 0, bgColor: '#EFB810' };
    }
  }

  // Registrar datos
  registrar() {
    const color1Data = this.operaycolor(this.color1);
    const color2Data = this.operaycolor(this.color2);
    const color3Data = this.operaycolor(this.color3);

    const valor = `${color1Data.num}${color2Data.num}${color3Data.num}`;
    const valorMin = parseFloat((parseFloat(valor) * 0.95).toFixed(2));
    const valorMax = parseFloat((parseFloat(valor) * 1.05).toFixed(2));

    const resistencia = {
      color1: this.color1,
      color2: this.color2,
      color3: this.color3,
      bgColor1: color1Data.bgColor,
      bgColor2: color2Data.bgColor,
      bgColor3: color3Data.bgColor,
      tolerancia: this.tolerancia,
      valor,
      valorMin,
      valorMax
    };

    if (this.editIndex !== -1) {
      this.resistencias[this.editIndex] = resistencia;
      this.editIndex = -1;
    } else {
      this.resistencias.push(resistencia);
    }

    this.guardarLocalStorage();
    this.limpiarFormulario();
    this.mostrarTabla = false;
  }

  cargarLocalStorage() {
    const datosGuardados = localStorage.getItem('resistencias');
    if (datosGuardados) {
      this.resistencias = JSON.parse(datosGuardados);
    }
  }

  guardarLocalStorage() {
    localStorage.setItem('resistencias', JSON.stringify(this.resistencias));
  }

  limpiarFormulario() {
    this.color1 = '';
    this.color2 = '';
    this.color3 = '';
    this.tolerancia = '';
  }

  eliminar(index: number) {
    this.resistencias.splice(index, 1);
    this.guardarLocalStorage();
  }

  editar(index: number) {
    const resistencia = this.resistencias[index];
    this.color1 = resistencia.color1;
    this.color2 = resistencia.color2;
    this.color3 = resistencia.color3;
    this.tolerancia = resistencia.tolerancia;
    this.editIndex = index;
  }

  toggleTabla() {
    this.mostrarTabla = !this.mostrarTabla;
  }
}

//TAMPOCO CUENTAAAA XDDDDDDDDDD