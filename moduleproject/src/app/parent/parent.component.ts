import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  items:string[]=[
    "Fan", "Table","Tablet","Lights","Lamp","Fridge","Food","Pen","Paper"
    ]
}
