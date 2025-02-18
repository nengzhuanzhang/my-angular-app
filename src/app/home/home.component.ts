import { Component, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

interface Course {
  type:string
  children?:Child[]
}

interface Child{
  name:string,
  url:string,
  count:number,
  comments:number,
  isFree:boolean,
  price?:number
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  list = [
    {
      src:'../../assets/images/carousel/1.jpg'
    },
    {
      src:'../../assets/images/carousel/2.jpg'
    },
    {
      src:'../../assets/images/carousel/3.jpg'
    },
    {
      src:'../../assets/images/carousel/4.png'
    },
    {
      src:'../../assets/images/carousel/5.jpg'
    },
    {
      src:'../../assets/images/carousel/6.png'
    },
    {
      src:'../../assets/images/carousel/7.jpg'
    }
  ];
  courseList:Course[] = [
    {
      type:'全部课程',
      children:[
        {
          name:`Unity最全最完整的零基础入门教程-Luna's Fantasy（露娜的大冒险）`,
          url:'https://www.sikiedu.com/files/course/2023/08-02/142256046fe1999314.jpg',
          count:8454,
          comments:66,
          isFree:true
        },
        {
          name:`C#编程-第一季-编程基础-宇宙最简单2021最新版`,
          url:'https://www.sikiedu.com/files/course/2021/10-14/17192914e765627633.png',
          count:28017,
          comments:78,
          isFree:true
        },
        {
          name:`Unity版植物大战僵尸：游戏制作完全指南`,
          url:'https://www.sikiedu.com/files/course/2023/12-22/1038113a58c4010564.png',
          count:5652,
          comments:4,
          isFree:true
        },
        {
          name:`《土豆英雄》使用Unity完整复刻开发-高还原度-第一季`,
          url:'https://www.sikiedu.com/files/course/2024/10-31/10375866fccf393026.jpg',
          count:438,
          comments:2,
          isFree:true
        }
      ]
    },
    {
      type:'Unity',
    },
    {
      type:'虚幻',
    },
    {
      type:'Cocos',
    },
    {
      type:'独立游戏',
    },
    {
      type:'Java',
    },
    {
      type:'Python人工智能',
    },
    {
      type:'游戏美术',
    },
    {
      type:'前端',
    },
    {
      type:'微信小程序',
      children:[
        {
          name:`快速上手微信小程序UI框架`,
          url:'https://www.sikiedu.com/files/course/2020/09-02/132725d23094370998.png',
          count:160,
          comments:2,
          isFree:false,
          price:240
        }
      ]
    },
    {
      type:'Linux运维',
    },
    {
      type:'单卖课',
    },
    {
      type:'大数据',
    },
    {
      type:'其他',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
