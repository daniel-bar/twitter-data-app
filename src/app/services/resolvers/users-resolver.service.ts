import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUserInterface } from '../../models/user.model';
import { UserService } from '../user.service';


@Injectable()
export class UsersResolver implements Resolve<Pick<IUserInterface, 'id' | 'username' | 'status'>[]> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pick<IUserInterface, 'id' | 'username' | 'status'>[]> {
        return this.userService.getUsers();
    }
}