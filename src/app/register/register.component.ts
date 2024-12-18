import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private httpClient :HttpClient){}

user:any={
  id :-1,
  firstname:"",
  lastname:"",
  email:"",
  password:"",
  address:"",
  username:"",
}

private apiURL='http://localhost:8080/user/add'
register(){
this.httpClient.post<any>(this.apiURL,this.user).subscribe(
  (newUser)=>{
    console.log("bonjour",newUser)

  }
)


}

}
