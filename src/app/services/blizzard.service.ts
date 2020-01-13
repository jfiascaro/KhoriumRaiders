import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlizzardService {
  
  constructor( private http:HttpClient ) {};
  token = 'USju0ixceBVVoyu9x82AU2XV1dIaej7YHP';

   getRoster() {
    const params = new HttpParams()
        .set('namespace', "profile-us")
        .set('locale', "en-US")
        .set('access_token', this.token);

      return this.http.get('https://us.api.blizzard.com/data/wow/guild/ragnaros/orden-de-los-colmillos/roster', {params} );
   };

   getPlayer( name: string ) {
    const params = new HttpParams()
        .set('namespace', "profile-us")
        .set('locale', "en-US")
        .set('access_token', this.token);

      return this.http.get(`https://us.api.blizzard.com/profile/wow/character/ragnaros/${name}`, {params} );
   };

   getPlayerEquipment( name: string ){
    const params = new HttpParams()
        .set('namespace', "profile-us")
        .set('locale', "en-US")
        .set('access_token', this.token);

      return this.http.get(`https://us.api.blizzard.com/profile/wow/character/ragnaros/${name}/equipment`, {params} );
   };
}


