import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SellerSuthComponent } from '../seller-suth/seller-suth.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ModalModule, RouterLink, SellerSuthComponent, HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
