import { Component } from '@angular/core'
import { IonicPage, NavController, AlertController } from 'ionic-angular'
import { FormBuilder, Validators } from '@angular/forms'

// providers
import { Auth } from '../../providers/auth'

// components
// import { Login } from '../login/login'

// validators
import { EmailValidator } from '../../validators/email'

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPassword {
  resetPasswordForm: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public auth: Auth, public formBuilder: FormBuilder) {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([ Validators.required, EmailValidator.isValid ])]
    })
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
        console.log(this.resetPasswordForm.value);
    } else {
        this.auth.resetPassword(this.resetPasswordForm.value.email)
        .then((user) => {
            let alert = this.alertCtrl.create({
                message: "Hemos enviado un email con los pasos para recuperar la contraseña de su cuenta al correo electrónico introducido",
                buttons: [{ text: "Ok", role: 'cancel',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                }]
            });
        alert.present();
        }, (error) => {
            var errorMessage: string = error.message;
            let errorAlert = this.alertCtrl.create({
                message: errorMessage,
                buttons: [{ text: "Ok", role: 'cancel' }]
            });

            errorAlert.present();
        });
    }
}

}
