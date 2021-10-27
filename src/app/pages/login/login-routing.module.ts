import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, data: {key: 'login', shouldDetach: 'no'}, children: [
      {
        path: 'login-form',
        loadChildren: () => import('./login-form/login-form.module').then(m => m.LoginFormModule)
      },
      {path: '', redirectTo: '/login/login-form', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
