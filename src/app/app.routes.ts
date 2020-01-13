import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RosterComponent } from './components/roster/roster.component';
import { PlayerComponent } from './components/player/player.component';


export const ROUTES: Routes = [
    { path: 'home', component:HomeComponent},
    { path: 'roster', component:RosterComponent},
    { path: 'player/:name', component:PlayerComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];