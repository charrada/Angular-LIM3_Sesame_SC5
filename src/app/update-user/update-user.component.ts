import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

private  api="http://localhost:8080/user/"

user:any;
userId!:number;
constructor(private route:ActivatedRoute,  private httpClient : HttpClient ){}
  ngOnInit(): void {
this.userId=+this.route.snapshot.paramMap.get('id')!;
this.getUser();
  }

getUser(){
this.httpClient.get<any>(this.api+"getUserById/"+this.userId).subscribe(
  (user1)=>{
this.user=user1;
  }
)
}
updateUser(){
this.httpClient.put<any>(this.api+"updateUser/"+this.userId,this.user).subscribe(
  (updatetUser)=>{
    console.log("updated",updatetUser);
  }
)

}

}
