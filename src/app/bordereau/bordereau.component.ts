import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bordereau',
  templateUrl: './bordereau.component.html',
  styleUrls: ['./bordereau.component.css']
})
export class BordereauComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  onContinue1(): void{
    this.router.navigateByUrl('creation-manuelle-des-bordereaux');
}

  onContinue2(): void{
  this.router.navigateByUrl('creation-auto-des-bordereaux');
}

  onContinue3(): void{
  this.router.navigateByUrl('consultation-des-bordereaux');
}

}
