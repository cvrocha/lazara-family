import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './_components/menu/menu.component';
import { FooterComponent } from './_components/footer/footer.component';
import { GaleryComponent } from './_components/galery/galery.component';
import { BirthdaysComponent } from './_components/birthdays/birthdays.component';
import { BannerComponent } from './_components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    GaleryComponent,
    BirthdaysComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
