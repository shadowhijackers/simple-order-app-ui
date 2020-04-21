import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './404';
import {AuthGuardService} from '@service/guards/auth.guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
