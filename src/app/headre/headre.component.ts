// header.component.ts
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-headre',
  templateUrl: './headre.component.html',
  styleUrls: ['./headre.component.css'] // تأكد من صحة المسار
})
export class HeaderComponent {
  private store = inject(Store);
  count$: Observable<number>;

  constructor() {
    this.count$ = this.store.select("counter");
  }
}
