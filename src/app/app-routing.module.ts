import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableTeamComponent } from './my-table-team/my-table-team.component';
import { FrmAddMobilEquipmentComponent } from './frm-add-mobil-equipment/frm-add-mobil-equipment.component';

const routes: Routes = [
  { path: 'teamScrum', component: MyTableTeamComponent },
  { path: 'frmAddEquipment', component: FrmAddMobilEquipmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
