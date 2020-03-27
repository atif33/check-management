import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PdfPrintComponent} from './pdf-print/pdf-print.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  // {path: '**', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'print',
    outlet: 'print',
    children: [
      {path: 'invoice', component: PdfPrintComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
