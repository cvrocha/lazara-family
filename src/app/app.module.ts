import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './_components/menu/menu.component';
import { FooterComponent } from './_components/footer/footer.component';
import { BirthdaysComponent } from './_components/birthdays/birthdays.component';
import { BannerComponent } from './_components/banner/banner.component';
import { GalleryComponent } from './_components/gallery/gallery.component';
import { TreeFamilyComponent } from './_components/tree-family/tree-family.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    BirthdaysComponent,
    BannerComponent,
    GalleryComponent,
    TreeFamilyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
