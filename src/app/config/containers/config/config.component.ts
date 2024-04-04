import { Component } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  showConfig(event: string) {
    console.log(event);
  }
}