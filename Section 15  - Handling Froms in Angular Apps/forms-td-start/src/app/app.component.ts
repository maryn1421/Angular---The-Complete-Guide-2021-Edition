import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm
  defaultQuestion = 'pet'
  answer = ""
  genders = ['male', 'female']
  user: {
    username: '',
    email : '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted: true;

  suggestUserName() {
    const suggestedName = 'Superuser';
    //1
   /*  this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: '',
      questionAnswer: '',
      gender: 'male'
    }) */

    //2
    this.signUpForm.form.patchValue({
      userData: {username: suggestedName}
    })
  }

/*   onSubmit(form: NgForm) {
      console.log(form)
  } */

  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm)
    this.user.username = this.signUpForm.form.value.userData.username
    this.user.email = this.signUpForm.form.value.userData.email
    this.user.secretQuestion = this.signUpForm.form.value.secret
    this.user.answer = this.signUpForm.form.value.questionAnswer
    this.user.gender = this.signUpForm.form.value.gender


    this.signUpForm.reset()
  }
}
