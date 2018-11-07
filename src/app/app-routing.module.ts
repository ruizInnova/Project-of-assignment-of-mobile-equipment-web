import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableTeamComponent } from './my-table-team/my-table-team.component';

const routes: Routes = [{ path:'teamScrum', component: MyTableTeamComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
