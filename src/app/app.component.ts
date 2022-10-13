import { Component } from '@angular/core';
import { MetaData } from './metadata.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModifiedUI';
  
  metadata : MetaData[] = [] ;

}
