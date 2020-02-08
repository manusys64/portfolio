import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
// import { MarkedDirective } from './marked.directive';
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
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
		MarkdownModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
