import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Child } from './course';
import { CountPipe } from '../pipe/count.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NzCardModule,NzFlexModule,NzGridModule,NzIconModule,CountPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() courseObj!:Child;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit('this is a output message form card component');
  }
}
