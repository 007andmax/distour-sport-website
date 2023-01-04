import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { IMaskModule } from 'angular-imask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/app/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TopProfileComponent } from './components/top-profile/top-profile.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { FormsModule } from '@angular/forms';
import { AddFundsComponent } from './components/add-funds/add-funds.component';
import { SportSuccessComponent } from './components/sport-success/sport-success.component';
import { SportFailedComponent } from './components/sport-failed/sport-failed.component';
import { PaymentsService } from './services/payments/payments.service';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { HeaderComponent } from './components/header/header.component';
import { ListChallengesComponent } from './components/list-challenges/list-challenges.component';
import { ItemChallengeComponent } from './components/list-challenges/item-challenge/item-challenge.component';
import { FiltersComponent } from './components/list-challenges/filters/filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfoChallengeComponent } from './components/list-challenges/info-challenge/info-challenge.component';
import { RulesComponent } from './components/list-challenges/rules/rules.component';
import { HowDoComponent } from './components/list-challenges/how-do/how-do.component';
import { JudgeComponent } from './components/list-challenges/info-challenge/judge/judge.component';
import { ParticipantComponent } from './components/list-challenges/info-challenge/participant/participant.component';
import { Overlay, OverlayContainer, ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ShowVideoComponent } from './components/list-challenges/info-challenge/show-video/show-video.component';
import { SafePipe } from './pipe/safe.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { AddChallengeComponent } from './components/list-challenges/add-challenge/add-challenge.component';
import { AddItemChallengeComponent } from './components/list-challenges/add-challenge/add-item-challenge/add-item-challenge.component';
import { FaqComponent } from './components/faq/faq.component';

import { ChallengeSocketService } from './services/socket/challenge-socket.service';
import { OverlayModule } from "@angular/cdk/overlay";
import { SupportComponent } from './components/support/support.component';
import { SupportItemComponent } from './components/support/support-item/support-item.component';
import { SupportAddComponent } from './components/support/support-add/support-add.component';
import { SupportFilterComponent } from './components/support/support-filter/support-filter.component';
import { SupportItemInfoComponent } from './components/support/support-item-info/support-item-info.component';
import { environment } from 'src/environments/environment';
import { BoyComponent } from './components/boy/boy.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsConditionsComponent } from './components/documents/terms-conditions/terms-conditions.component';
import { ReturnPolicyComponent } from './components/documents/return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './components/documents/privacy-policy/privacy-policy.component';
import { FaqOrdersComponent } from './components/faq/faq-orders/faq-orders.component';
import { FaqGeneralComponent } from './components/faq/faq-general/faq-general.component';
import { DietExerciseComponent } from './components/faq/diet-exercise/diet-exercise.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    TopProfileComponent,
    WithdrawalComponent,
    AddFundsComponent,
    SportSuccessComponent,
    SportFailedComponent,
    HomeComponent,
    ServicesComponent,
    HeaderComponent,
    ListChallengesComponent,
    ItemChallengeComponent,
    FiltersComponent,
    InfoChallengeComponent,
    RulesComponent,
    HowDoComponent,
    JudgeComponent,
    ParticipantComponent,
    ShowVideoComponent,
    SafePipe,
    ProfileComponent,
    AddChallengeComponent,
    AddItemChallengeComponent,
    FaqComponent,
    SupportComponent,
    SupportItemComponent,
    SupportAddComponent,
    SupportFilterComponent,
    SupportItemInfoComponent,
    BoyComponent,
    AboutComponent,
    ContactComponent,
    TermsConditionsComponent,
    ReturnPolicyComponent,
    PrivacyPolicyComponent,
    FaqOrdersComponent,
    FaqGeneralComponent,
    DietExerciseComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    IMaskModule,
    FormsModule,
    SidebarModule.forRoot(),
    NgbModule,
    OverlayModule,
    InfiniteScrollModule,
    ToastrModule.forRoot(),

  ],
  entryComponents: [RulesComponent,
    HowDoComponent],
  providers: [
    AuthService,
    PaymentsService,
    ChallengeSocketService,
    ToastrService,
    Overlay,
    OverlayContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
