import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrl: './ubicanos.component.css'
})
export class UbicanosComponent {
  formularioForm;
  datosFormulario: any;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre:"",
      apellido:"",
      correo_electronico:"",
      telefono:"",
      mensaje:""
    });

    
  }


  ngOnInit(){
    console.log("hola")
  }



  enviarDatos(){
    this.datosFormulario = this.formularioForm.value;
    console.log('Los datos capturados son:', this.datosFormulario);
  }


}
