import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { BordereauComponent } from './bordereau/bordereau.component';
import { ConsultBrdrComponent } from './consult-brdr/consult-brdr.component';
import { CrtAutoBrdrComponent } from './crt-auto-brdr/crt-auto-brdr.component';
import { CrtManuelBrdrComponent } from './crt-manuel-brdr/crt-manuel-brdr.component';
import { HomeComponent } from './home/home.component';
import { PrixParNomenclatureComponent } from './prix-par-nomenclature/prix-par-nomenclature.component';
import { PrixParSecteurComponent } from './prix-par-secteur/prix-par-secteur.component';
import { RHierarchiqueComponent } from './r-hierarchique/r-hierarchique.component';
import { RParSecteurComponent } from './r-par-secteur/r-par-secteur.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RecueilDesPrixComponent } from './recueil-des-prix/recueil-des-prix.component';

export const APP_ROUTES: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {path:'recherche',
    component: RechercheComponent},
  {
    path: 'recueil',
    component: RecueilDesPrixComponent
  },
  {
    path: 'r-hiérarchique',
    component:RHierarchiqueComponent

  },
  {
    path: 'r-par-secteur',
    component: RParSecteurComponent
  },
  {
    path: 'bordereau',
    component: BordereauComponent
  },
  {
    path: 'prix-par-scteur',
    component: PrixParSecteurComponent
  },
  {
    path: 'prix-par-nomenclature',
    component: PrixParNomenclatureComponent
  },
  {
    path: 'consultation-des-bordereaux',
    component: ConsultBrdrComponent
  },
  {
    path: 'creation-auto-des-bordereaux',
    component: CrtAutoBrdrComponent
  },
  {
    path: 'creation-manuelle-des-bordereaux',
    component: CrtManuelBrdrComponent
  }

]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
