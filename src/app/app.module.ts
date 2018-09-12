import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
 
import { HttpModule } from '@angular/http';
import { FreePersonalDetailPage } from '../pages/free-personal-detail/free-personal-detail';
import { HttpProvider } from '../providers/http/http';
import { ListMasterPage } from '../pages/list-master/list-master';
import { GeneralHomePage } from '../pages/general-home/general-home';
import { FreeDashboardTabsPage } from '../pages/free-dashboard-tabs/free-dashboard-tabs';
import { FreeBusinessDetailPage } from '../pages/free-business-detail/free-business-detail';
import { FreeUploadImagePage } from '../pages/free-upload-image/free-upload-image';


// import { SuperTabsModule } from 'ionic2-super-tabs';
import { DetailsPage } from '../pages/details/details';
import { BusinessListPage } from '../pages/business-list/business-list';
import { BusinessVideosPage } from '../pages/business-videos/business-videos';
import { ProductServicesPage } from '../pages/product-services/product-services';
import { ContactInfoPage } from '../pages/contact-info/contact-info';
import { DetailsTabsPage } from '../pages/details-tabs/details-tabs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YoutubePipe } from '../pipes/youtube/youtube';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';
// import { FirebaseProvider } from '../providers/firebase/firebase';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

// const firebaseConfig = {
//   // Initialize Firebase
//     apiKey: "AIzaSyB3mjDLHmjvfd1ssVoFuLcyBw0VVGdHpHU",
//     authDomain: "atjoindb.firebaseapp.com",
//     databaseURL: "https://atjoindb.firebaseio.com",
//     projectId: "atjoindb",
//     storageBucket: "atjoindb.appspot.com",
//     messagingSenderId: "400317297399"
// };

@NgModule({
  declarations: [
    MyApp,
    FreePersonalDetailPage,
    ListMasterPage,
    GeneralHomePage,
    FreeDashboardTabsPage,
    FreeBusinessDetailPage,
    FreeUploadImagePage,
    DetailsPage,
    BusinessListPage,
    BusinessVideosPage,
    ProductServicesPage,
    ContactInfoPage,
    DetailsTabsPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpModule,
    // SuperTabsModule.forRoot(),
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FreePersonalDetailPage,
    ListMasterPage,
    GeneralHomePage,
    FreeDashboardTabsPage,
    FreeBusinessDetailPage,
    FreeUploadImagePage,
    DetailsPage,
    BusinessListPage,
    BusinessVideosPage,
    ProductServicesPage,
    ContactInfoPage,
    DetailsTabsPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    HttpProvider,
    YoutubeVideoPlayer,
    // FirebaseProvider,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    RemoteServiceProvider
  ]
})
export class AppModule { }
