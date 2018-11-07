import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTableTeamDataSource } from './my-table-team-datasource';

@Component({
  selector: 'app-my-table-team',
  templateUrl: './my-table-team.component.html',
  styleUrls: ['./my-table-team.component.scss'],
})
export class MyTableTeamComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTableTeamDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MyTableTeamDataSource(this.paginator, this.sort);
  }
}
