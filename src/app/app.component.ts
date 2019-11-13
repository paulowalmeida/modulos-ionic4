import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    menuId = 'main-menu';
    pages: {
        url: string,
        name: string,
        icon: string
    }[];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navCtrl: NavController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.pages = [
            {name: 'Mapa Simples', url: '/simple-map', icon: 'map'},
            {name: 'Geolocalizacao', url: '/geolocation', icon: 'locate'}
        ];

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
