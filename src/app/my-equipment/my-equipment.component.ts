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
  persons = new BehaviorSubject<any[]>([]);
  dataSource = new PersonDataSource(this.persons);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Code', 'Name', 'NumberPhone', 'Network', 'IMEI', 'Brand', 'Model' ];

  constructor(private equipmentService: EquipmentService, private router: Router){
    this.equipmentService.getEquipment()
                         .subscribe((persons: any[]) => {
                           this.persons.next(persons);
                         });
  }


  ngOnInit() {
  }
}
export class PersonDataSource extends DataSource<any> {
  persons: BehaviorSubject<any>;

  constructor(persons: BehaviorSubject<any>) {
    super();
    this.persons = persons;
  }

  connect(): Observable<any> {
    return this.persons;
  }

  disconnect() {}
}
