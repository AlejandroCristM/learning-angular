import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolverService } from './servers/server/server-resolver.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ],
  },
  // { path: 'not-founded', component: PageNotFoundComponent },
  { path: 'not-founded', component: ErrorComponent, data: {message: 'Page not found!'}},
  { path: '**', redirectTo: '/not-founded' },
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoute, {useHash: true})],
  imports: [RouterModule.forRoot(appRoute, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
