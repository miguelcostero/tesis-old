import { Component } from '@angular/core'
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular'
import { FormBuilder, Validators } from '@angular/forms'

// Import components
import { HomePage } from '../home/home'
import { ResetPassword } from '../reset-password/reset-password'

// Import providers
import { Auth } from '../../providers/auth'

// Import validators
import { EmailValidator } from '../../validators/email'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loginForm: any;
  loading: any;

  constructor(public navCtrl: NavController, public auth: Auth, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([ Validators.required, EmailValidator.isValid ])],
      password: ['', Validators.compose([ Validators.minLength(6), Validators.required ])]
    })
  }

  goToResetPassword() {
    this.navCtrl.push(ResetPassword)
  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(auth => {
          this.navCtrl.setRoot(HomePage)
        }, error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel'
                }
              ]
            })
            alert.present();
          })
        })
        .catch(error => {
          console.log(error)
        })

        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true
        })

        this.loading.present()
    }
  }

}
