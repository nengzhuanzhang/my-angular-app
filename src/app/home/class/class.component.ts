import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface classInfo {
  name?:string,
  type?:string
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(public router:ActivatedRoute) {
    this.router.queryParams.subscribe((params: classInfo)=>{
      console.log('queryParams----',params)
    })
  }

  ngOnInit() {
  }

}
