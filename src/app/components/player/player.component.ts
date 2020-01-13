import { Component, OnInit } from '@angular/core';
import { BlizzardService } from '../../services/blizzard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: []
})
export class PlayerComponent implements OnInit {
  player: any[] = [];
  equipment: any[] = [];
  name: string = "";

  constructor( private blizzard: BlizzardService, private activatedRoute: ActivatedRoute ) {
    
    this.activatedRoute.params.subscribe( params => this.name = params['name']);
    this.getPlayer(this.name);
    this.getPlayerEquipment(this.name);

   }

   getPlayer(name: string) {
    this.blizzard.getPlayer(name)
    .subscribe( (player: any)=>{
      console.log(player);
      this.player = player;
    });
   };
   
   getPlayerEquipment(name: string) {
    this.blizzard.getPlayerEquipment(name)
    .subscribe( (equipment: any)=>{
      console.log(equipment.equipped_items);
      this.equipment = equipment.equipped_items;
    });
   };

   

  ngOnInit() {
  }

}
