import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSelectorComponent } from './modules/card-selector/card-selector.component';
import { ShowCardComponent } from './modules/card-selector/show-card/show-card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'card-selector',
  },
  {
    path: 'card-selector',
    component: CardSelectorComponent,
  },
  {
    path: 'card/:id',
    component: ShowCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
