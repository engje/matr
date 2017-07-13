import { CesaComponent } from './cesa.component';

export const routes = [
  { path: '', children: [
    { path: '', component: CesaComponent },
    { path: 'child-cesa', loadChildren: './+child-cesa#ChildCesaModule' }
  ]},
];
