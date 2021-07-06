import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UserResolver } from './services/resolvers/user-resolver.service';
import { UsersResolver } from './services/resolvers/users-resolver.service';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'user-list', component: UserListComponent, resolve: { users: UsersResolver } },
  { path: 'user/:id', component: UserDetailsComponent, resolve: { user: UserResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }