import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { UserListPage } from '../pages/user-list/user-list';
import { LoginPage } from '../pages/login/login';
import { CameraPage } from '../pages/camera/camera';
import { InstructionsPage } from '../pages/instructions/instructions';

@NgModule({
  declarations: [
    MyApp,
    UserListPage,
    LoginPage,
    CameraPage,
    InstructionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserListPage,
    LoginPage,
    CameraPage,
    InstructionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    VideoCapturePlus,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
