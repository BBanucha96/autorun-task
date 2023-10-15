import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableModalService {
  private isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() {}

  openModal(): void {
    this.isOpen$.next(true);
  }

  closeModal(): void {
    this.isOpen$.next(false);
  }

  isOpen() {
    return this.isOpen$.asObservable();
  }
}
