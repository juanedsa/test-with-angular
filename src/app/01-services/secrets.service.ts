import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretsService {
  public getNumber(): number {
    return 123456;
  }
}
