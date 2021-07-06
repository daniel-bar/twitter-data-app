import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { UserService } from 'src/app/services/user.service';

import { IUserInterface, User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private _users: User[] = [];
  private _clickableUser: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const source = interval(1000);
    const users = this.route.snapshot.data['users'] as IUserInterface[];

    this._users = users.map((user) => new User(user));

    source.pipe(
      switchMap(() => this.userService.getUsers()),
    ).subscribe((data) => {
      this._users = data.map((user) => new User(user));
    });
  }

  ngOnDestroy() {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }

  /**
  * Getter for users of the model in the DB
  * @returns users array of the model
  */
  public getUsers() {
    return this._users;
  }

  /**
  * Handler for making the user clickable
  * @returns boolean
  */
  public clickableUser() {
    return this._clickableUser;
  }
}
