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
    <h1>Hello from Child Cesa</h1>    
  `,
})
export class ChildCesaComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildCesa` component');
  }

}
