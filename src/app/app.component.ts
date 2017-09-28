import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserListPage } from '../pages/user-list/user-list';
import { LoginPage } from '../pages/login/login';
import { CameraPage } from '../pages/camera/camera';
import { InstructionsPage } from '../pages/instructions/instructions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UserListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

