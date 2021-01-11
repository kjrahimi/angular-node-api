import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelperComponent } from './helper/helper.component';
import { NodeApiComponent } from './node-api/node-api.component';

const routes: Routes = [
  { path: 'userguide', component: HelperComponent },
  { path: 'node', component: NodeApiComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
