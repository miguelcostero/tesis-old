import { Component, ViewChild } from '@angular/core'
import { Platform, AlertController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AngularFire } from 'angularfire2'
import { Push, PushObject, PushOptions } from '@ionic-native/push'
import { LocalNotifications } from '@ionic-native/local-notifications'
import { HeaderColor } from '@ionic-native/header-color'

// Import components
import { HomePage } from '../pages/home/home'
import { Login } from '../pages/login/login'
import { NotificationsDetailsPage } from '../pages/notifications-details/notifications-details'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any
  notification: any
  private mainColor: string = '#3a6bc1'

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private af: AngularFire, private push: Push, private localNotifications: LocalNotifications, private headerColor: HeaderColor, private alertController: AlertController) {
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
      statusBar.backgroundColorByHexString(this.mainColor)
      headerColor.tint(this.mainColor)
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
      this.notification
      if (notification.additionalData.foreground) {
        let youralert = this.alertController.create({
          title: 'New Push notification',
          message: notification.message
        })
        youralert.present();
      } else {
        
      }
    })

    pushObject.on('registration').subscribe((registration: any) => {
      //do whatever you want with the registration ID
    })
  
    pushObject.on('error').subscribe(error => {
      console.log(`Error with Push plugin ${error}`)
    })

    this.localNotifications.on("click", notification => {
      
    })
  }
}

