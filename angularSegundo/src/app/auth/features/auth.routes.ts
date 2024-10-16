//import { Component } from "@angular/core";
import{ Routes } from "@angular/router";
import { routes } from "../../app.routes";

export default [
    {
        path:'sign-in',
        loadComponent:()=>import('./sign-in/sign-in.component'),
    },
    {
        path:'sign-up',
        loadComponent:()=>import('./sign-up/sign-up.component'),
    }
]as Routes

