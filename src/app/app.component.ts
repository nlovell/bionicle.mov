import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bionicle.mov';

  videoId$ = this.http.get('/.netlify/functions/random-video', {
    responseType: 'text',
  });

  constructor(private http: HttpClient) {}
}
