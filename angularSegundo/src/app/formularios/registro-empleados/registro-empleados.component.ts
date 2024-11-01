import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Empleado {
  matricula: string;
  nombre: string;
  correo: string;
  edad: number;
  horas: number;
  subTotal?: number;
  horasPagar?: number;
  horasExtras?: number;
  totalPagar?: number;
}

@Component({
  selector: 'app-registro-empleados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-empleados.component.html',
  styles: ``,
})
export default class RegistroEmpleadosComponent implements OnInit {
  form: FormGroup;
  empleados: Empleado[] = [];
  empleadosAMostrar: Empleado[] = [];
  empleadoEnEdicion: Empleado | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      matricula: [''],
      nombre: [''],
      correo: [''],
      edad: [0],
      horas: [0],
    });
  }

  ngOnInit(): void {
    const storedEmpleados = localStorage.getItem('empleados');
    if (storedEmpleados) {
      this.empleados = JSON.parse(storedEmpleados);
      this.imprimirTabla();
    }
  }

  registrar(): void {
    if (this.form.valid) {
      const empleado: Empleado = {
        ...this.form.value,
        edad: Number(this.form.value.edad),
        horas: Number(this.form.value.horas),
      };

      if (this.empleadoEnEdicion) {
        const index = this.empleados.findIndex(
          (e) => e.matricula === this.empleadoEnEdicion?.matricula
        );
        this.empleados[index] = empleado;
        this.empleadoEnEdicion = null;
      } else {
        this.empleados.push(empleado);
      }

      this.actualizarLocalStorage();
      this.form.reset();
      alert('Empleado registrado.');
    } else {
      alert('Formulario inválido.');
    }
  }

  actualizarLocalStorage(): void {
    localStorage.setItem('empleados', JSON.stringify(this.empleados));
  }

  imprimirTabla(): void {
    const storedEmpleados = localStorage.getItem('empleados');
    if (storedEmpleados) {
      this.empleadosAMostrar = JSON.parse(storedEmpleados);
      this.empleadosAMostrar.forEach((empleado) => {
        empleado.horasExtras = Math.max(empleado.horas - 40, 0);
        empleado.horasPagar = Math.min(empleado.horas, 40);

        // Calcular el salario de horas normales y horas extras
        const salarioNormal = empleado.horasPagar * 70;
        const salarioExtra = empleado.horasExtras * 140;

        // Asignar los cálculos a los respectivos campos
        empleado.subTotal = salarioNormal + salarioExtra;
        empleado.horasPagar = salarioNormal;
        empleado.horasExtras = salarioExtra;
      });
    } else {
      this.empleadosAMostrar = [];
      alert('No hay empleados registrados en LocalStorage.');
    }
  }

  calcularTotal(): number {
    return this.empleadosAMostrar.reduce(
      (acc, empleado) => acc + (empleado.subTotal || 0),
      0
    );
  }

  modificar(matricula: string): void {
    const empleado = this.empleados.find((emp) => emp.matricula === matricula);
    if (empleado) {
      this.empleadoEnEdicion = empleado;
      this.form.patchValue(empleado);
    }
  }

  eliminar(matricula: string): void {
    this.empleados = this.empleados.filter(
      (emp) => emp.matricula !== matricula
    );
    this.actualizarLocalStorage();
    alert('Empleado eliminado.');
    this.imprimirTabla();
  }
}
