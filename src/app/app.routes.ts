import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'shoppingCartApp',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: "http://localhost:4201/remoteEntry.js",
        remoteName: 'ShoppingCartApp',
        exposedModule: './ShoppingCartModule'
      }).then(m => m.ShoppingCartModule).catch(error =>
        console.log('Error=>', error));
    }
  }
];
