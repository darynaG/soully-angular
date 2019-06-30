import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: any[];
  public deleteBtn (userId: number) {
    //console.log("delete : ", this.users$)
    this.data.deleteUser(userId).subscribe(
      (result)=>{
        let index = this.users$[userId];
        this.users$.splice(index, 1);
      }
    )
  };


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      (result)=>{
        this.users$ = result;
      }
    );
  }

}
