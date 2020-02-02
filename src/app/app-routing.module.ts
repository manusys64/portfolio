import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'home',component: HomeComponent,
    data: { title: 'RL | Full Stack Developer' }},
  { path: 'about', component: AboutComponent,
    data: {title: 'About | RL'} },
  { path: 'contact', component: ContactComponent,
    data: {title: 'Contact | RL'}  },
  { path: 'skills', component: SkillsComponent,
    data: {title: 'Skills | RL'} },
  { path: 'work', component: WorksComponent,
    data: {title: 'Work | RL'} },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
