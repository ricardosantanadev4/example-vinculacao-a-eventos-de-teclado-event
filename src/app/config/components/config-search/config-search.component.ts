import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config-search',
  templateUrl: './config-search.component.html',
  styleUrls: ['./config-search.component.scss']
})
export class ConfigSearchComponent {
  @Output() newConfigEnventEmmit = new EventEmitter<Event>();

  onKeydown(eventKeydown: Event) {
    // console.log(eventKeydown);
    return this.newConfigEnventEmmit.emit(eventKeydown);
  }
}