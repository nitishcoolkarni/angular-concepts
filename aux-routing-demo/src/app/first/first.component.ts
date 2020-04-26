import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showSecond() {
    // this.router.navigate([{ outlets: { firstOutlet: 'second' }}]);
    this.router.navigate([{outlets: {appOutlet: 'second'}}], {relativeTo: this.route})
    //not working
    // this.router.navigate([{ outlets: { appOutlet: 'first' } }, { outlets: { appOutlet: 'second' } }])
  }

  clearSecond() {
    this.router.navigate([{ outlets: { appOutlet: null } }])
  }

}
