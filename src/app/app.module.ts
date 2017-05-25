import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

// Import components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { CreateNewEvent } from '../pages/create-new-event/create-new-event';
import { EventDetails } from '../pages/event-details/event-details';
import { EventEdit } from '../pages/event-edit/event-edit';
import { FilterEventsPopover } from '../components/filter-events-popover/filter-events-popover';

// Import providers
import { Auth } from '../providers/auth';

// Import configurations
import { authenticationConfig, firebaseConfig } from '../enviroments/firebase.configuration'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    ResetPassword,
    CreateNewEvent,
    EventDetails,
    EventEdit,
    FilterEventsPopover
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authenticationConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    ResetPassword,
    CreateNewEvent,
    EventDetails,
    EventEdit,
    FilterEventsPopover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
