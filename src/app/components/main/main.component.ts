import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'usernames': new FormArray([])
    });
  }

  ngOnDestroy() {
    for (const subscription of this._subscriptions) {
      subscription.unsubscribe();
    }
  }

  public trackByFunction(index: number, item: any): null | number {
    return !item ? null : index;
  }

  /**
  * Handler for form submit
  * @returns void
  */
  public onSubmit() {
    this._subscriptions = [
      ...this._subscriptions,
      this.userService.storeUsers(
        this.form.get('usernames').value,
      ).subscribe(() => {
        this.router.navigate(['/user-list']);
      }),
    ];
  }

  /**
   * Handler for adding usernames array
   * @returns void
   */
  public onAddUser() {
    const control = new FormControl(null);
    (<FormArray>this.form.get('usernames')).push(control);
  }

  public getControls() {
    return (<FormArray>this.form.get('usernames')).controls;
  }
}
