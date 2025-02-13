import { Component, OnInit } from '@angular/core';

interface MenuInfo {
  name: string;
  path: string;
  list?:MenuInfo[]
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList:MenuInfo[] = [
    {
      name:'首页 ',
      path:''
    },
    {
      name:'全部课程 ',
      path:'',
    },
    {
      name:'Unity ',
      path:'',
      list:[
        {
          name:'Unity 全部课程',
          path:'/class'
        },
        {
          name:'Unity A计划（永久）',
          path:'/plan/2/introduction'
        },
        {
          name:'Unity学习路线',
          path:''
        },
      ]
    },
    {
      name:'虚幻 ',
      path:''
    },
    {
      name:'Cocos ',
      path:''
    },
    {
      name:'Java ',
      path:''
    },
    {
      name:'Python AI ',
      path:''
    },
    {
      name:'小程序',
      path:'',
      list:[
        {
          name:'微信小程序 全部课程',
          path:'/class'
        },
        {
          name:'微信小程序 A计划（永久）',
          path:'/plan/1/introduction'
        },
        {
          name:'微信小程序学习路线',
          path:''
        },
      ]
    },
    {
      name:'合作课程',
      path:''
    },
    {
      name:'其他',
      path:''
    },
  ];
  showTemplate:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  goToPage(path:string) {
    // this.router.navigate([path])
  }

}
