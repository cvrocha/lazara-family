import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/_front/home/home.component';
import { LoginComponent } from './pages/_front/login/login.component';
import { DashboardComponent } from './pages/_back/dashboard/dashboard.component';
import { MenuComponent } from './_components/_front/menu/menu.component';
import { FooterComponent } from './_components/_front/footer/footer.component';
import { BannerComponent } from './_components/_front/banner/banner.component';
import { GalleryComponent } from './_components/_front/gallery/gallery.component';
import { TreeFamilyComponent } from './_components/_front/tree-family/tree-family.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './_components/_front/slider/slider.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuVerticalComponent } from './_components/_back/menu-vertical/menu-vertical.component';
import { LoginDComponent } from './_components/_front/login-d/login-d.component';
import { HomeDComponent } from './_components/_back/home-d/home-d.component';
import { CrudUsersComponent } from './_components/_back/crud-users/crud-users.component';
import { CrudPhotosComponent } from './_components/_back/crud-photos/crud-photos.component';
import { ArvoreGComponent } from './_components/_back/arvore-g/arvore-g.component';
import { HomeDashComponent } from './pages/_back/home-dash/home-dash.component';
import { UsersComponent } from './pages/_back/users/users.component';
import { PhotosComponent } from './pages/_back/photos/photos.component';
import { FamilyThreeComponent } from './pages/_back/family-three/family-three.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    BannerComponent,
    GalleryComponent,
    TreeFamilyComponent,
    SliderComponent,
    MenuVerticalComponent,
    LoginDComponent,
    HomeDComponent,
    CrudUsersComponent,
    CrudPhotosComponent,
    ArvoreGComponent,
    HomeDashComponent,
    UsersComponent,
    PhotosComponent,
    FamilyThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }