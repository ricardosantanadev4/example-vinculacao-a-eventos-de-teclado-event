import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-config-search',
  templateUrl: './config-search.component.html',
  styleUrls: ['./config-search.component.scss']
})
export class ConfigSearchComponent {
  @Output() newConfigEnventEmmit = new EventEmitter<string>();
  inputText = { text: 'Apague o texto.' };

  onKeydown(eventKeydown: Event) {
    console.log(eventKeydown);
    const inputValue = (eventKeydown.target as HTMLInputElement).value;
    this.newConfigEnventEmmit.emit(inputValue);
    return (eventKeydown.target as HTMLInputElement).value;
  }

}