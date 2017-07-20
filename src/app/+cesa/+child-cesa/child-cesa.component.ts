import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildCesa` component loaded asynchronously');

@Component({
  selector: 'child-cesa',
  template: `
    <div class="tertiary-nav">
      <div class="container">
        <div class="p-t-b-15 clearfix">
          <div class="breadcrum-wrapper pull-left text-left">
            Capital Structure
          </div>
          <div class="product-btn-group pull-right">
              <a class="btn btn-primary btn-xs" href="">Check it Out</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container m-t-20">
      <div class="overall-summary overall-summary-bottomless">
        <div class="stats-switcher-viewport js-stats-switcher-viewport is-revealing-lang-stats">
          <div class="stats-switcher-wrapper">
            <div class="repository-lang-stats">
              <ol class="repository-lang-stats-numbers">
                <li *ngFor="let lang of langList">
                    <span class="color-block language-color {{lang.class}}"></span>
                    <span class="lang">{{lang.title}}</span>
                    <span class="percent">{{lang.amount}}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="repository-lang-stats-graph js-toggle-lang-stats">
        <span *ngFor="let lang of langList" class="language-color {{lang.class}}">{{lang.title}}</span>
      </div>

      <div class="logos">
        <div class="grid">
          <div class="grid-col" *ngFor="let tech of techList">
            <div class="logo">
              <div class="logo-wrapper">
                <div class="logo-container">
                  <img class="logo-img" src="{{tech.img}}">
                </div>
                <span class="logo-name">{{tech.title}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ChildCesaComponent implements OnInit {
  public react = '../../assets/img/tech/react.svg';
  public redux = '../../assets/img/tech/redux.svg';
  public nodejs = '../../assets/img/tech/nodejs.svg';
  public mongodb = '../../assets/img/tech/mongodb.svg';
  public d3 = '../../assets/img/tech/d3-2.svg';
  public hapi = '../../assets/img/tech/hapi.svg';
  public gulp = '../../assets/img/tech/gulp.svg';

  public techList =  [
    {title: "React", img: this.react}, 
    {title: "Redux", img: this.redux},
    {title: "Node.js", img: this.nodejs},
    {title: "MongoDB", img: this.mongodb},
    {title: "d3", img: this.d3},
    {title: "hapi", img: this.hapi}, 
    {title: "gulp", img: this.gulp}
  ];

  public langList = [
    {title: "JavaScript", amount: "a whole lot", class: "js-color percent50"},
    {title: "CSS", amount: "a good dose", class: "css-color percent25"},
    {title: "C#", amount: "a smidge", class: "csharp-color percent10"},
    {title: "HTML", amount: "a tad", class: "html-color percent5"},
  ];

  public ngOnInit() {
    console.log('hello `ChildCesa` component');
  }

}
