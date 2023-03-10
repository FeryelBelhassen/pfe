import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';



@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
        { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), 
       
        canActivate:[AuthGuard] },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule],
    providers:[AuthGuard]
})
export class AuthRoutingModule { }