import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
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
