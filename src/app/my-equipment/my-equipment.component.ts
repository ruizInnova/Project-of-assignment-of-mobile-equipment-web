import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { EquipmentService } from '../services/equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-equipment',
  templateUrl: './my-equipment.component.html',
  styleUrls: ['./my-equipment.component.scss'],
})
export class MyEquipmentComponent implements OnInit {
  equipments = new BehaviorSubject<any[]>([]);
  dataSource = new EquipmentDataSource(this.equipments);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Code', 'Name', 'NumberPhone', 'Network', 'IMEI', 'Brand', 'Model', 'actions' ];

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
    ) {
    this.equipmentService
        .getEquipment()
                         .subscribe((equipments: any[]) => {
                           this.equipments.next(equipments);
                         });
  }

  ngOnInit() {
  }

update(person) {
  localStorage.setItem('mobil-equipment', JSON.stringify(person));
  this.router.navigate(['/frmAddEquipment']);
}

delete(person) {
  this.equipmentService.deleteEquipment(person.id).subscribe(
    response => {
      console.log('OK: ', response);

      const tmp = this.equipments.value.filter(
        p => p.id !== person.id
      );

      this.equipments.next(tmp);
    },
    error => {
      console.log('ERROR: ', error);
    }
  );
}
}
export class EquipmentDataSource extends DataSource<any> {
  equipments: BehaviorSubject<any>;

  constructor(equipments: BehaviorSubject<any>) {
    super();
    this.equipments = equipments;
  }

  connect(): Observable<any> {
    return this.equipments;
  }

  disconnect() {}
}
