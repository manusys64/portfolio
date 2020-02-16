import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent, ContactComponent, HomeComponent,
  SkillsComponent, WorksComponent, ContactFormComponent} from './pages/index';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModalModule } from './modal/index';
import { ApiService } from './api.service';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SkillsComponent,
    WorksComponent,
    AboutComponent,
    NavBarComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    MarkdownModule.forRoot(),
    RouterModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
