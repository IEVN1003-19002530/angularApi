//import { Component } from "@angular/core";
import{ Routes } from "@angular/router";

export default [
    {
        path:'ejemplo1',
        loadComponent:()=>import('./ejemplo1/ejemplo1.component'),
    },
    {
        path:'zodiaco-chino',
        loadComponent:()=>import('./zodiaco-chino/zodiaco-chino.component'),
    },
    {
        path:'registro-empleados',
        loadComponent:()=>import('./registro-empleados/registro-empleados.component'),
    },
    {
        path:'resistencias2',
        loadComponent:()=>import('./resistencias2/resistencias2.component'),
    },

]as Routes

