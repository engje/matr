/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header class="header-wrapper">
        <div class="navigation-wrapper">
            <div class="container">
                <nav class="navbar">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-mobile-header navbar-header mr-20 mr-xs-0">
                        <div class="row hidden-sm hidden-md hidden-lg">
                            <div class="col-xs-5 hidden-sm hidden-md hidden-lg">
                                <div class="navbar-mobile-header-icon navbar-mobile-header-icon-out">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="col-xs-2 text-center">
                                <div class="navbar-brand" id="elastic">
                                    <h1>
                                        <a class="logo-m hidden-sm hidden-md hidden-lg" 
                                            [routerLink]=" ['./'] ">
                                            <img [src]="maLogo" alt="ma-logo-mobile">
                                        </a>
                                    </h1>
                                </div>
                            </div>
                            <div class="col-xs-5 hidden-sm hidden-md hidden-lg text-right">
                                <ul class="menu-m hidden-sm hidden-md hidden-lg">
                                    <li class="">
                                        <a class="icon-contact" href="/contact"></a>
                                    </li>
                                    <li id="searchbar">
                                        <a class="button icon" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="navbar-brand hidden-xs" id="elastic">
                            <h1>
                                <a class="hidden-xs" id="ma-logo"
                                   [routerLink]=" ['./'] ">
                                    <img [src]="maLogo" alt="ma-logo" style="width:90px;">
                                </a>
                            </h1>
                        </div>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse mobile-inner-nav">
                        <nav class="nav navbar-nav primary-nav-hover" id="nav">
                            <ul>
                                <li>
                                    <a id="nav_products"
                                      [routerLink]=" ['./cesa'] "
                                      routerLinkActive="active" 
                                      [routerLinkActiveOptions]= "{exact: true}">
                                        CESA
                                    </a>
                                </li>
                                <li>
                                    <a id="nav_cloud" 
                                      [routerLink]=" ['./ers'] "
                                      routerLinkActive="active" 
                                      [routerLinkActiveOptions]= "{exact: true}">
                                        ERS
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav class="nav navbar-nav navbar-right hidden-xs">
                            <ul>
                                <!-- To set parameters to contact button -->
                                <li class="hidden-xs hidden-sm">
                                  <a class="btn btn-secondary btn-contact" href="/contact">contact</a>
                                </li>
                                <!-- ////////////////ends here///////////////-->
                                <li class="hidden-xs hidden-md hidden-lg">
                                    <a class="icon-contact" href="/contact"></a>
                                </li>
                                <li class="hidden-xs" id="searchbar">
                                    <a class="button icon" href="#"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <!-- /.navbar-collapse -->
                </nav>
            </div>
        </div>

        <div class="header-search-wrapper open-search">
            <div class="container">
                <div class="big-search">
                    <i class="big-search-icon"></i>
                    <form id="searchfrm" name="searchForm" autocomplete="on" action="/search" method="get">
                        <ul class="tags-wrapper">
                            <li class="search-field">
                              <input type="text" name="q" id="autocomplete" class="form-control global-input" autocomplete="off">
                            </li>
                        </ul>
                    </form>
                    <a class="header-search-cancel" href="#"></a>
                </div>
                <div class="nav-auto-complete"></div>
            </div>
        </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- Footer Section -->
    <footer class="footer-wrapper">
        <div class="container">
            <div class="row footer-content">
                <div class="col-xs-6 col-sm-3 col-md-3">
                    <h3>Products</h3>

                    <ul>
                        <li><a [href]="urlCreditEdge">CreditEdge</a></li>
                        <li><a [href]="urlCreditView2">Credit View 2</a></li>
                        <li><a [href]="urlRiskCalc">RiskCalc</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-sm-3 col-md-3">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="/community/meetups">Meetups</a></li>
                        <li><a href="/videos">Videos & Webinars</a></li>
                        <li><a href="/training">Training</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-sm-3 col-md-3">
                    <h3>About</h3>

                    <ul>
                        <li><a [href]="urlCareers">Careers/Jobs</a></li>
                        <li><a [href]="urlContact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    <!-- Footer Section end-->
  `
})
export class AppComponent implements OnInit {
  public name = 'MATR - portal';
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public maLogo = 'assets/img/svg/ma-logo.svg';
  public url = 'https://twitter.com/AngularClass';
  public urlCreditEdge = 'https://www.creditedge.com/';
  public urlCreditView2 = '';
  public urlRiskCalc = '';
  public urlCareers = 'https://careers.moodys.com/';
  public urlContact = 'http://www.moodysanalytics.com/Contact-Us';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
