import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(params => {
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
