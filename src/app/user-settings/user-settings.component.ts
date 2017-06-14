import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import { AngularFire } from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';

@Component({
    selector: 'user-settings',
    templateUrl: './user-settings.component.html',
      styleUrls: ['./user-settings.component.scss']
})

export class UserSettingsComponent implements OnInit {

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
    public currentUserName: string;
    public currentUserPart: string;
    public currentUserStartDate: string;

    constructor(private _router: Router, public af: AngularFire, private _userService: UserService) {
      // Set Firebase Storage Reference
      this.storage = firebase.storage().ref();
    }

    ngOnInit() {
        // Grab Current User
          this.af.auth.subscribe(user => {
              if(!user) {

                  alert('please log in or sign up!');
              } else {
                  console.log('settings user', user);
                  this.userName = user.auth.displayName;
                  this.userID = user.uid;

                  this._userService.getUserByUID(this.userID).then(result => {
                      this.currentUser = result;
                      // this.currentUserSongs = this.currentUser.songs;
                      this.currentUserName = this.currentUser.firstName + ' ' + this.currentUser.lastName;
                      this.currentUserPart = this.currentUser.singingPart;
                      // this.lastCompletedSong = this.currentUser.lastCompletedSong;
                      // TODO: Format this date...
                      this.currentUserStartDate = this.currentUser.startDate;
                  });
              }
          });

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
