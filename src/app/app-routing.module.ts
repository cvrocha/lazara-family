import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/_front/home/home.component';
import { LoginComponent } from './pages/_front/login/login.component';
import { DashboardComponent } from './pages/_back/dashboard/dashboard.component';
import { HomeDashComponent } from './pages/_back/home-dash/home-dash.component';
import { PhotosComponent } from './pages/_back/photos/photos.component';
import { UsersComponent } from './pages/_back/users/users.component';
import { FamilyThreeComponent } from './pages/_back/family-three/family-three.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'dashboard/home' , component: HomeDashComponent},
  {path: 'dashboard/photos' , component: PhotosComponent},
  {path: 'dashboard/users' , component: UsersComponent},
  {path: 'dashboard/family-three' , component: FamilyThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
