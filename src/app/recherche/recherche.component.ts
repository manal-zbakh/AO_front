import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  //route vers recherche hiérarchique
  onContinue1(): void{
    this.router.navigateByUrl('r-hiérarchique');
}
//route vers recherche par secteur
  onContinue2(): void{
  this.router.navigateByUrl('r-par-secteur');
}
}
