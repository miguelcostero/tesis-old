import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { AngularFireModule } from 'angularfire2'
import { Push } from '@ionic-native/push'
import { LocalNotifications } from '@ionic-native/local-notifications'

// Import components
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { Login } from '../pages/login/login'
import { ResetPassword } from '../pages/reset-password/reset-password'
import { CreateNewEvent } from '../pages/create-new-event/create-new-event'
import { EventDetails } from '../pages/event-details/event-details'
import { EventEdit } from '../pages/event-edit/event-edit'
import { FilterEventsPopover } from '../components/filter-events-popover/filter-events-popover'

// Import providers
import { Auth } from '../providers/auth'

// Import configurations
import { authenticationConfig, firebaseConfig } from '../enviroments/firebase.configuration'

// import modals
import { EventTypeModal } from '../modals/event-type/event-type-modal'
import { ClientsModal } from '../modals/clients/clients-modal'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    ResetPassword,
    CreateNewEvent,
    EventDetails,
    EventEdit,
    FilterEventsPopover,
    EventTypeModal,
    ClientsModal
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
    FilterEventsPopover,
    EventTypeModal,
    ClientsModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
