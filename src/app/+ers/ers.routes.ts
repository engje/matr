import { ErsComponent } from './ers.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ErsComponent },
    { path: 'child-ers', loadChildren: './+child-ers#ChildErsModule' }
  ]},
];
