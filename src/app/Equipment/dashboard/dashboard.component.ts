import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipment } from '../Model/Equipment';
import { EquipmentService } from '../service/equipment.service';
import { ImageserviceService } from '../service/imageservice.service';
import { HttpClient } from '@angular/common/http';
import { Image } from '../Model/Image';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { PdfService } from '../service/pdf.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
liste:Equipment[]=[]
equipe=new Equipment()
img1=new Image()

  id=0;
  constructor(private s :EquipmentService,private router:Router,
    private img:ImageserviceService,
    private http:HttpClient,
    private AuthService:AuthService,

   ) { }
data!: any[]

  ngOnInit(): void {}


addUserForm=new FormGroup({
  id: new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  quantity: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required),

 image_id:new FormControl('',Validators.required),
  price: new FormControl('',Validators.required),
  equipmentType: new FormControl('',[Validators.required]),
  imageData: new FormControl('',[Validators.required]),
  user_id: new FormControl('',[Validators.required]),

})


imgURL:any
msg:any
fileName!: string;
group:any
selectedFile!: File ;

onFileSelected(event:any) {
  this.selectedFile = event.target.files[0];
}
num:any
logout(){
  this.AuthService.logout()
  this.router.navigate(['/login'])
}
// createPdf1() {
//   this.http.post('http://localhost:8090/getpdf', {contents: ['Hello, world!']}, { responseType: 'arraybuffer' })
//     .subscribe((response: ArrayBuffer) => {
//       saveAs(blob, 'example.pdf');
//     });
// }
 name = "My Product";
 quantity = 10;
 image = "https://example.com/product-image.jpg";

  items = [
  { name: "Item 1", quantity: 5, price: 10 },
  { name: "Item 2", quantity: 2, price: 20 },
  { name: "Item 3", quantity: 1, price: 30 },
  { name: "Item 4", quantity: 3, price: 40 },
  { name: "Item 5", quantity: 1, price: 50 },
  { name: "Item 6", quantity: 1, price: 60 },
  { name: "Item 7", quantity: 1, price: 70 },
  { name: "Item 8", quantity: 1, price: 80 },
  { name: "Item 9", quantity: 1, price: 90 },
];

// Calculate the total price
 totalPrice = this.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

// Create contents array with shopping information
 contents = [
  "Shopping report",
  "Date: " + new Date().toDateString(),


  ...this.items.map(item => `${item.name}: ${item.quantity} x ${item.price}$ = ${item.quantity * item.price}TN`),
  `Total price: ${this.totalPrice}$`
];
id_user:any




// for(const us of this.listeUsers){
// //      this.id_user=us.id
// // console.log(this.id_user);
// // }
//     this.img.ajouterimage(formData).subscribe(
//       (data) => {
//         this.s.ajouterequipment(equipment,data.id).subscribe(data => {

//         console.log(data);
//       },(error:Image)=>{
//         console.log(error);
//       }
//     );
//     alert("ajouter avec success")
//     this.rouetr.navigate(['/home'])
//   });
// }



getid(eq:number){
   return eq;
 }
}
