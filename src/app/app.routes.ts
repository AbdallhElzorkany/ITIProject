import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { AboutComponent } from '../components/about-component/about-component';
import { LatestPostsComponent } from '../components/latest-posts-component/latest-posts-component';
import { NotFoundComponent } from '../components/not-found-component/not-found-component';
import { PostComponent } from '../components/post-component/post-component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"latest-posts",
    component:LatestPostsComponent
  },
  {
    path:"post/:name",
    component:PostComponent
  },
  {
    path:"**",
    component:NotFoundComponent,
    pathMatch:"full"
  }
];
