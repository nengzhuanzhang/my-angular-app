import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from '../components/card/course';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NzButtonModule,NzGridModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  courseId!:number | string;
  courseInfo:Child = {
    id: 0,
    name: '',
    completeTime: '',
    expirationTime: '',
    url: '',
    count: 0,
    comments: 0,
    isFree: false,
    price: 0
  };

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.courseId=params['id'];
      this.courseInfo = this.getCourseInfoById(this.courseId)
    })
  }

  getCourseInfoById(id:number | string): Child{
    const courseInfoById = {
      id:1,
      name:`Unity最全最完整的零基础入门教程-Luna's Fantasy（露娜的大冒险）`,
      completeTime:'2023-08-01',
      expirationTime:'',
      url:'https://www.sikiedu.com/files/course/2023/08-02/142256046fe1999314.jpg',
      count:8454,
      comments:66,
      isFree:true,
      price:0
    }
    return courseInfoById;
  }

}
