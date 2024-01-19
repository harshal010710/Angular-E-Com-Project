import { Routes } from '@angular/router';
import { SellerSuthComponent } from './seller-suth/seller-suth.component';
import { HomeComponent } from './home/home.component';
import { DefaultPageComponent } from './default-page/default-page.component';


export const routes: Routes = [
	{component : HomeComponent, path : 'home'},
	{component : SellerSuthComponent, path : 'seller-auth'},
	{component: DefaultPageComponent,path : '**'} 
];
