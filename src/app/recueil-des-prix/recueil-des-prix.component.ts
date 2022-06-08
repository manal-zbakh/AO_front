import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recueil-des-prix',
  templateUrl: './recueil-des-prix.component.html',
  styleUrls: ['./recueil-des-prix.component.css']
})
export class RecueilDesPrixComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  //route vers recherche par secteur
  onContinue1(): void{
    this.router.navigateByUrl('prix-par-scteur');
}


}
