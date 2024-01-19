import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seller-suth',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './seller-suth.component.html',
  styleUrl: './seller-suth.component.css',
  providers:[FormBuilder]
})
export class SellerSuthComponent 
{
  constructor(private sobj : FormBuilder){}

  sellerAuth = this.sobj.group(
    {
      sellername:[''],
      selleremail:[''],
      sellerpassword:[''] 
    }
  )

  SetData()
  {
    this.sellerAuth.setValue(
      {
        sellername: 'harshal',
        selleremail:'@uiop',
        sellerpassword: 'h8e3'
      }
    )
  }
}
