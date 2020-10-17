import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IMaskModule} from 'angular-imask';
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
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ShowVideoComponent } from './components/list-challenges/info-challenge/show-video/show-video.component';
import { SafePipe } from './pipe/safe.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { AddChallengeComponent } from './components/list-challenges/add-challenge/add-challenge.component';
import { AddItemChallengeComponent } from './components/list-challenges/add-challenge/add-item-challenge/add-item-challenge.component';
import { FaqComponent } from './components/faq/faq.component';
var firebaseConfig = {
  apiKey: "AIzaSyBqb4yqfaBKrYAYLUdMSvSRJ5JqCTfs7Xo",
    authDomain: "sport-challenges-80bc7.firebaseapp.com",
    databaseURL: "https://sport-challenges-80bc7.firebaseio.com",
    projectId: "sport-challenges-80bc7",
    storageBucket: "sport-challenges-80bc7.appspot.com",
    messagingSenderId: "901851542377",
    appId: "1:901851542377:web:9c822c1d4e30d525c303f8",
    measurementId: "G-7YD0WP1S3J"
};
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
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    IMaskModule,
    FormsModule,
    SidebarModule.forRoot(),
    NgbModule,
    InfiniteScrollModule,
    ToastrModule.forRoot() ,
    
  ],
  entryComponents:[RulesComponent,
  HowDoComponent],
  providers: [AuthService, PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
