import { Component } from '@angular/core';
import { Fournisseurcomponent } from '../core/fournisseurcomponent';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  
  fournisseur ={ idFournisseur:105,code:'A104B89',libelle:'MyTeck' }
    
}


