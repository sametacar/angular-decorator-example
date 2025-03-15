import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodSidePagesModule } from './pages/good-side-pages.module';
import { BadSidePagesModule } from './pages/bad-side-pages.module';

// Import components from good side
import { RivendellComponent } from './pages/rivendell/rivendell.component';
import { GondorComponent } from './pages/gondor/gondor.component';
import { RohanComponent } from './pages/rohan/rohan.component';

// Import components from bad side
import { MordorComponent } from './pages/mordor/mordor.component';

const routes: Routes = [
  // Good side routes
  { path: 'rivendell', component: RivendellComponent },
  { path: 'gondor', component: GondorComponent },
  { path: 'rohan', component: RohanComponent },

  // Bad side routes
  { path: 'mordor', component: MordorComponent },

  // Default route
  { path: '', redirectTo: 'rivendell', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GoodSidePagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
