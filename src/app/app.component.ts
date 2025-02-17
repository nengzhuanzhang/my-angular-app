import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutModule,NzButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'my-angular-app';
}
