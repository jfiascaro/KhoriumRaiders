import { Component, OnInit } from '@angular/core';
import { BlizzardService } from '../../services/blizzard.service';
import { Router } from '@angular/router'; //Para poder ir a la página de Player/name
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styles: []
})
export class RosterComponent implements OnInit {

  roster: any[] = [];
  equipment: any[] = [];

  constructor( private blizzard: BlizzardService, private router: Router ) {
      this.blizzard.getRoster()
        .subscribe( (roster: any) =>{
          console.log(roster.members);
          this.roster = roster.members;
        })
   };

   

  ngOnInit() {}

  getPlayerInfo(name: string) {
    this.router.navigate(['/player',name.toLowerCase()]);
  };

  getPlayerEquipment(name: string) {
    this.blizzard.getPlayerEquipment(name)
    .subscribe( (equipment: any)=>{
      console.log(equipment.equipped_items);
      this.equipment = equipment.equipped_items;
      return this.equipment;
    });
   };

}
