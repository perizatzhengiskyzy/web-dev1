import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { AlbumDetailComponent } from './album-detail/album-detail';
import { AlbumPhotosComponent } from './album-photos/album-photos';
import { Albums } from './albums/albums';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];