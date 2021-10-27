import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditdataComponent } from './editdata/editdata.component';
import { LoginComponent } from './login/login.component';
import { QnaComponent } from './qna/qna.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'editdata', component: EditdataComponent },
  { path: 'contactus', component: ContactusComponent },
{path: 'qna', component: QnaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}

