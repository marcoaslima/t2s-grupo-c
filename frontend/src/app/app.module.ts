import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GridviewComponent } from './components/gridview/gridview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageTitleComponent } from './components/pagetitle/pagetitle.component';
import { CoworkersService } from './services/coworkers/coworkers.service';
import { RegistersService } from './services/registers/registers.service';
import { TasksService } from './services/tasks/tasks.service';
import { LogService } from './services/log/log.service';

@NgModule({
  declarations: [
    AppComponent,
    GridviewComponent,
    NavbarComponent,
    FooterComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LogService,
    CoworkersService,
    RegistersService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{
  title =""
}
