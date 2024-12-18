import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
users:any[]=[]

constructor(private httpClient :HttpClient ,private router :Router){}

private apiURL='http://localhost:8080/user/'


ngOnInit(): void {
this.httpClient.get<any>(this.apiURL+"getAllUsers").subscribe(
  listUser=>{
this.users=listUser
  }
)


}


update(id :number){
this.router.navigate(['/update',id])
}


delete(id :number){
  this.httpClient.delete<void>(this.apiURL+"deleteUser/"+id).
  subscribe(()=>{
    window.location.reload();
  } )

  }


}
