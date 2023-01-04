import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BoyComponent } from './components/boy/boy.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/documents/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './components/documents/return-policy/return-policy.component';
import { TermsConditionsComponent } from './components/documents/terms-conditions/terms-conditions.component';
import { DietExerciseComponent } from './components/faq/diet-exercise/diet-exercise.component';
import { FaqGeneralComponent } from './components/faq/faq-general/faq-general.component';
import { FaqOrdersComponent } from './components/faq/faq-orders/faq-orders.component';
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
  {
    path: "faq",
    redirectTo: "faq/orders"
  },
  {
    path: 'faq', component: FaqComponent, children: [
      { path: 'orders', component: FaqOrdersComponent, },
      { path: 'general', component: FaqGeneralComponent, },
      { path: 'diet-exercise', component: DietExerciseComponent, },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'support/add', component: SupportAddComponent },
  { path: 'support/:id', component: SupportItemInfoComponent },
  { path: 'challenge/add', component: AddChallengeComponent },
  { path: 'challenge/:id', component: InfoChallengeComponent },
  { path: 'challenge/:id/video/:video', component: ShowVideoComponent },
  { path: 'services/success/:id', component: SportSuccessComponent },
  { path: 'services/failed/:id', component: SportFailedComponent },

  { path: 'documets/privacy-policy', component: PrivacyPolicyComponent },
  { path: 'documets/return-policy', component: ReturnPolicyComponent },
  { path: 'documets/terms-conditions', component: TermsConditionsComponent },


  { path: 'boy/:id', component: BoyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
