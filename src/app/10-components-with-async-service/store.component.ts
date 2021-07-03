import { Component } from '@angular/core';

@Component({
  selector: 'twain-component',
  template: ``
})
export class StoreComponent {
  public haveIceCream = false;

  public checkIceCream(): void {
    setTimeout(() => {
      this.haveIceCream = true;
    }, 1000);
  }
}
