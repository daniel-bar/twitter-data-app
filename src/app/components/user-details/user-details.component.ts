import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { IUserInterface, User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private _user: User;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._subscriptions.push(
      this.route.data.subscribe(
        (data: Data) => {
          this._user = new User(data['user'] as IUserInterface);
        },
      ),
    );
  }

  ngOnDestroy() {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }

  public getUser() {
    return this._user;
  }
}
