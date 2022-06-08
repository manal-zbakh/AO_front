import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RecueilDesPrixComponent } from './recueil-des-prix/recueil-des-prix.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RHierarchiqueComponent } from './r-hierarchique/r-hierarchique.component';
import { RParSecteurComponent } from './r-par-secteur/r-par-secteur.component';
import { BordereauComponent } from './bordereau/bordereau.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PrixParSecteurComponent } from './prix-par-secteur/prix-par-secteur.component';
import { PrixParNomenclatureComponent } from './prix-par-nomenclature/prix-par-nomenclature.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    RecueilDesPrixComponent,
    RHierarchiqueComponent,
    RParSecteurComponent,
    BordereauComponent,
    RechercheComponent,
    PrixParSecteurComponent,
    PrixParNomenclatureComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
