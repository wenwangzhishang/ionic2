import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { HomePage } from '../pages/home/home';
//提供页面的数据服务，并提供该页面的一些方法
import { UtilService } from '../service/util.service';

@Component({
  templateUrl: 'app.html'
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  tabs: Array<{ key: string, value: string, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private iab: InAppBrowser,
    private utilService: UtilService) {
    this.initializeApp();
    this.getTabs();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getTabs() {
    this.tabs = this.utilService.getTabs();
  }

  openPage(key: string) {
    this.nav.setRoot(HomePage, { tab: key });
    console.log(key)
  }
}
