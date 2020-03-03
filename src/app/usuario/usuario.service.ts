import { UsuarioModel } from './../shared/models/usuario.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  getAllUsuarios(){
    return this.http.get<UsuarioModel[]>("http://localhost:8080/usuarios");
  }
  getCep(cep) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
  }
  postDados(obj) {
    return this.http.post(this.url, obj);
  } 
  postDados2(obj) {
    return this.http.post("http://localhost:8080/musicas", obj);
  }
  url = environment.api + "usuarios/";
  constructor( private http : HttpClient) { 

  }

  getAll() {
      return [
      {id : '1', email : 'GiovanniGuariento97@gmail.com', telefone : '1195445-5058', redesocial : '@giovanni'},
      {id : '2', email : 'GiovanniGuariento@gmail.com', telefone : '1195445-5058', redesocial : '@giovanni'},
      {id : '3', email : 'Giovanni@gmail.com', telefone : '1195445-5058', redesocial : '@giovanni'},
      {id : '4', email : 'Guariento@gmail.com', telefone : '1195445-5058', redesocial : '@guariento'},
      {id : '5', email : 'Gabriel@gmail.com', telefone : '1195445-5058', redesocial : '@grabriel'}
      
      //vetor     
    ];
    //service getall
  }
  getAllusers () {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees?limit=100");
  }

  deleteUsuario(id_usuario){
    return this.http.delete(this.url + id_usuario)
  }
  getOneUsuario(id_usuario){
    return this.http.get<UsuarioModel>(this.url + id_usuario)
  }

  updateUsuario(id_usuario, obj){
    return this.http.post (this.url + id_usuario , obj)
  };


}
