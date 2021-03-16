import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { AddChallengeComponent } from './components/list-challenges/add-challenge/add-challenge.component';
import { InfoChallengeComponent } from './components/list-challenges/info-challenge/info-challenge.component';
import { ShowVideoComponent } from './components/list-challenges/info-challenge/show-video/show-video.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicesComponent } from './components/services/services.component';
import { SportFailedComponent } from './components/sport-failed/sport-failed.component';
import { SportSuccessComponent } from './components/sport-success/sport-success.component';
import { SupportAddComponent } from './components/support/support-add/support-add.component';
import { SupportItemInfoComponent } from './components/support/support-item-info/support-item-info.component';
import { SupportComponent } from './components/support/support.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support/add', component: SupportAddComponent },
  { path: 'support/:id', component: SupportItemInfoComponent },
  { path: 'challenge/add', component: AddChallengeComponent },
  { path: 'challenge/:id', component: InfoChallengeComponent },
  { path: 'challenge/:id/video/:video', component: ShowVideoComponent },
  { path: 'services/success/:id', component: SportSuccessComponent },
  { path: 'services/failed/:id', component: SportFailedComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
