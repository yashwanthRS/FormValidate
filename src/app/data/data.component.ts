import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any

  ngOnInit(): void {
    this.refreshList();
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.UserId).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }
  refreshList(){
    debugger
    this.service.getUserList().subscribe(data =>{
      this.UserList = data ;
    });
  }
}
