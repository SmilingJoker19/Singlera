import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ServicesComponent } from './services/services.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';




const routes: Routes = [
  {path: '', redirectTo:'/Home', pathMatch: 'full'},
  {path: 'Home', component: SliderComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Customer', component: ContactusComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
