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
    }
]as Routes

