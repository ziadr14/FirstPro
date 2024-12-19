import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  @Input() data:any[] = []
  @Output() selection = new EventEmitter()



  edtectChanges(event:any){
    this.selection.emit(event)

  }

}
