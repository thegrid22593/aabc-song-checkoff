import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import { AngularFire } from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'user-settings',
    template: require('./user-settings.html')
})

export class UserSettingsComponent {

    public user: any;
    public userName: string;
    public userID: string;
    public currentUser: any;

    public displayName: string;
    public photoURL: string;

    //Storage
    public path;
    public storageref;
    public storage;

    // Edit User
    newDisplayName: string;
    public newPhotoURL;

    constructor(private _router: Router, public af: AngularFire, private _userService: UserService) {
      // Set Firebase Config
    //   const firebaseConfig = {
    //     apiKey: "AIzaSyAYThpdcu3zb4ll_q6BJkpaWYS8XTVVz4Y",
    //     authDomain: "aabc-checkoff.firebaseapp.com",
    //     databaseURL: "https://aabc-checkoff.firebaseio.com",
    //     storageBucket: "aabc-checkoff.appspot.com",
    //     messagingSenderId: "920421563150"
    //   }
    //   // Initiazlize Firebase
    //   firebase.initializeApp(firebaseConfig);
      // Set Firebase Storage Reference
      this.storage = firebase.storage().ref();

      // Grab Current User
        this.af.auth.subscribe(user => {
            console.log('Current User:', user);
            if(!user) {
                alert('please log in or sign up!');
            } else {
                this.userName = user.auth.displayName;
                this.userID = user.uid;
            }
        })


    }

    filebuttoni(event) {
      let files = event.srcElement.files[0];
      let self = this;
      let uploader = document.getElementById("uploader");
      this.path = "user-profile-pics/"+files.name;
      this.storageref = this.storage.child(this.path);
      let uploadTask = this.storageref.put(files);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function(snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done!');
        switch(snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
          console.log('upload is paused');
          break;
          case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
        }
      }, function(error) {
      switch (error) {
        case 'storage/unauthorized':
          break;

        case 'storage/canceled':
          break;

        case 'storage/unknown':
          break;
      }
    }, function() {
        let downloadURL = uploadTask.snapshot.downloadURL;
        console.log('Upload done!');
        self.storageref.getDownloadURL().then(url => self.newPhotoURL = url);
      });

    }

    updateDisplayName(name) {
        this.af.auth.subscribe(user => {
            user.auth.updateProfile({displayName: name, photoURL: this.newPhotoURL}).then(success => {
                console.log('success!');
                console.log(user);
                this._router.navigate(['user-settings']);
            });
        });
        console.log(this.userID);
        let updatedUser = {
          profilePicURL: this.newPhotoURL
        }
        this._userService.updateUser(this.userID, updatedUser);
    }


}
