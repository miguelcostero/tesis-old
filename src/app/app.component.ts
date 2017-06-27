import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AngularFire } from 'angularfire2'
import { Push, PushObject, PushOptions } from '@ionic-native/push'
import { LocalNotifications } from '@ionic-native/local-notifications'

// Import components
import { HomePage } from '../pages/home/home'
import { Login } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public af: AngularFire, private push: Push, private localNotifications: LocalNotifications) {
    // check if user is already logged
    const authObserver = af.auth.subscribe(user => {
      if (user) {
        this.rootPage = HomePage
        authObserver.unsubscribe()
      } else {
        this.rootPage = Login
        authObserver.unsubscribe()
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()
      this.pushsetup()
    })
  }

  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: '243420000366'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    }

    const pushObject: PushObject = this.push.init(options)

    pushObject.on('notification').subscribe((notification: any) => {
      console.log(notification)
      this.localNotifications.schedule({
        id: 1,
        text: notification.message
      })
    })

    pushObject.on('registration').subscribe((registration: any) => {
      //do whatever you want with the registration ID
    })
  
    pushObject.on('error').subscribe(error => {
      console.log(`Error with Push plugin ${error}`)
    })
  }
}

