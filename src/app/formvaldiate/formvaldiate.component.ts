import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-formvaldiate',
  templateUrl: './formvaldiate.component.html',
  styleUrls: ['./formvaldiate.component.css']
})
export class FormvaldiateComponent implements OnInit {

  UserId: string;
/*   FirstName: string;
  LastName: string;
  UserName: string;
  Email: string;
  User_Password: string;
  Mobile_number: string;
  City: string;
  Zipcode: string; */

  UserList:any=[];

  UserCity: any[] = [
    {value: 'Arizona', viewValue: 'Arizona'},
    {value: 'Gotham', viewValue: 'Gotham'},
    {value: 'New York', viewValue: 'New York'},
    {value: 'California', viewValue: 'California'},
    {value: 'Texas', viewValue: 'Texas'},
    {value: 'NJ', viewValue: 'NJ'},
  ];

    submitted: boolean;

  emp:any;

  constructor(private service: SharedService , private fb:FormBuilder ){}

  /* newForm: FormGroup; */

  newForm: FormGroup = this.fb.group({

    firstname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    lastname: ['', [Validators.maxLength(20)]],

    username: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],

    email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9]+\\.[a-z]{2,4}$")]],

    userPassword: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10),]],
    passwordConfirm: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10),]],

    zipcode: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern("^[0-9]*$")]],
    mobilenumber: ['',[Validators.required,Validators.minLength(10) ,Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
    city: ['',Validators.required],

    agreement: [Validators.required]
    /* acceptTerms: [false, Validators.requiredTrue], */
});
  ngOnInit(): void {
    this.refreshUserList();


  }

  get f(){
    return this.newForm.controls;
  }
onSubmit(){
  debugger
  this.submitted = true;
  if(this.newForm.invalid ){
    return
  }
  else
  {
    console.log(this.newForm)
    debugger
    var val = {
              UserId:this.UserId,
              FirstName:this.newForm.value.firstname,
              LastName:this.newForm.value.lastname,
              UserName:this.newForm.value.username,
              Email:this.newForm.value.email,
              User_Password:this.newForm.value.userPassword,
              Mobile_number:this.newForm.value.mobilenumber,
              City:this.newForm.value.city,
              Zipcode:this.newForm.value.zipcode
        };
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}





  /* addClick(){
    this.emp={
      UserId:0,
      FirstName:"",
      LastName:"",
      UserName:"",
      Email:"",
      User_Password:"",
      Mobile_number:"",
      City:"",
      Zipcode:""
    };

  } */
  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
    });

}

}
