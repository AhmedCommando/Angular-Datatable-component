import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data = [
      {
        col1: 'L1',
        col2: 'L1',
        col3: 'L1'
      },
      {
        col1: 'L2',
        col2: 'L2',
        col3: 'L2'
      },
      {
        col1: 'L3',
        col2: 'L3',
        col3: 'L3'
      },
      {
        col1: 'L4',
        col2: 'L4',
        col3: 'L4'
      }
  ];

  public actions = [
    { edit: '<button type="button">Edit</button>'},
    { delete: '<button type="button">Delete</button>'}
  ];

  onEdit(row) {
    console.log('Edit', row);
  }

  onDelete(row) {
    console.log('Delete', row);
  }
}
