import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


    {path: 'HomeComponent', component: HomeComponent},
    {path: 'CabecalhoComponent', component: CabecalhoComponent}


  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
