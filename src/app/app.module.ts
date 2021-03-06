import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatTooltipModule } from '@angular/material';
import { MyTableTeamComponent } from './my-table-team/my-table-team.component';
import { HttpClientModule } from '@angular/common/http';
import { FrmAddMobilEquipmentComponent } from './frm-add-mobil-equipment/frm-add-mobil-equipment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyEquipmentComponent } from './my-equipment/my-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyTableTeamComponent,
    FrmAddMobilEquipmentComponent,
    MyEquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
