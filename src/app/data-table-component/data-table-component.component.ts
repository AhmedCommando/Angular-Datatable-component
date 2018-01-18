import { Component, AfterViewInit, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-datatableComponent',
  templateUrl: './data-table-component.component.html',
  styleUrls: ['./data-table-component.component.css']
})
export class DataTableComponentComponent implements AfterViewInit, OnInit {
  @Input() data: [any];
  @Input() edit: boolean;
  @Input() delete: boolean;
  @Input() view: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onView: EventEmitter<any> = new EventEmitter<any>();

  public headers = [];
  public tableData = [];
  public tableActions = [];
  public tableWidget: any;

  constructor() {}

  ngOnInit() {
    this.getHeaders();
    this.getActions();
  }

  ngAfterViewInit() {
    this.StartDataTable();
  }

  StartDataTable() {
    const table: any = $('#example');
    this.tableWidget = table.DataTable({
      select: true
    });
  }

  getHeaders() {
    const data = this.data;
    let tableData;
    data.forEach((obj, index) => {
      tableData = [];
      for (const key of Object.keys(obj)) {
        if (this.headers.indexOf(key) === -1) {
          this.headers.push(key);
        }
        tableData.push(obj[key]);
      }
      this.tableData.push(tableData);
    });
  }

  /**
   * Add action buttons to table
   */
  getActions() {
    if (this.edit) {
      this.headers.push('Edit');
    }
    if (this.delete) {
      this.headers.push('Delete');
    }
    if (this.view) {
      this.headers.push('View');
    }
  }

  /**
   * Delete event
   * @param row
   */
  deleteClick(row) {
    this.onDelete.emit(row);
  }

  viewClick(row) {
    this.onView.emit(row);
  }

  /**
   * Edit event
   * @param row
   */
  editClick(row) {
    this.onEdit.emit(row);
  }

}
