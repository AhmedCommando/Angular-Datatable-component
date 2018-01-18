import { Component, AfterViewInit, Input, Output, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'
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
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  
  
  public headers = [];
  public tableData = [];
  public tableActions = [];
  public tableWidget: any;

  constructor() {}

  ngOnInit() {
    this.getHeaders()
    this.getActions()
  }

  ngAfterViewInit() {
    this.test()
  }


  initDatatable() {
    let exampleId: any = $('#example');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
    
  }

  getHeaders() {
    const data = this.data;
    let tableData;
    data.forEach((obj,index) => {
      tableData = []
      for (let key in obj) {
        if (this.headers.indexOf(key) === -1) {
          this.headers.push(key)
        }
        tableData.push(obj[key])
      }
      this.tableData.push(tableData)
    })
  }


  getActions() {
    if(this.edit) this.headers.push("Edit")
    if(this.delete) this.headers.push("Delete")
    if(this.view) this.headers.push("View")
  }

  deleteClick(row) {
    console.log(row)
  }

  viewClick(row) {

  }

  editClick(row) {
    console.log(row)
    this.onEdit.emit(row)
  }

  test () {
    
    //this.getTableData();
    this.initDatatable()
  }

}
