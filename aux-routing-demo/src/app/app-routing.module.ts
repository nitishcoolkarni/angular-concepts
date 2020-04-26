import { ThirdComponent } from './first/third/third.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second/second.component';
import { FourthComponent } from './first/second/fourth/fourth.component';


const routes: Routes = [
  {path: '', redirectTo: '/(appOutlet:first)', pathMatch: 'full'},
  {path: 'first', component: FirstComponent, outlet: 'appOutlet', children: [
    // {path: '', redirectTo: '/(firstOutlet:second)', pathMatch: 'full'},
    {path: 'second', component: SecondComponent, outlet: 'appOutlet', children: [
      {path: 'fourth', component: FourthComponent}
    ]},
    {path: 'third', component: ThirdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
