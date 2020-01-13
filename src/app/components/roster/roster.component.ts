import { Component, OnInit } from '@angular/core';
import { BlizzardService } from '../../services/blizzard.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styles: []
})
export class RosterComponent implements OnInit {

  roster: any[] = [];

  constructor( private blizzard: BlizzardService ) {
      this.blizzard.getRoster()
        .subscribe( (roster: any) =>{
          console.log(roster.members);
          this.roster = roster.members;
        })
   }

   

  ngOnInit() {
  }

}
