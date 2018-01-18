import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data = [{
    x: 'xx',
    y: 'yy'
  },
  {
    x: 'zzz',
    y: 'hhh'  
  },
  {
    x: 'zzggz',
    y: 'hhh'  
  },
  {
    x: 'zzssz',
    y: 'hhh'  
  },
  {
    x: 'zzz',
    y: 'hhh'
  }
  ]

  public actions = [
    { edit: "<button type='button'>Edit</button>"},
    { delete: "<button type='button'>Delete</button>"}
  ]

  onEdit(row) {
    console.log(row)
  }
}
