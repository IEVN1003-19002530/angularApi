import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  alumnos:string[]=['a','b','c']
  
  constructor(){ }
  add(alumno:string)
  {
    this.alumnos.push(alumno)
  }
}
