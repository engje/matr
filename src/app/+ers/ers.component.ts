import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Ers` component loaded asynchronously');

@Component({
  selector: 'ers',
  template: `
    <h1>Hello from Ers</h1>
    <span>
      <a [routerLink]=" ['./child-ers'] ">
        Child Ers
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class ErsComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Ers` component');
  }

}
