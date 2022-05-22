import { Injectable } from '@angular/core';
import { SecretsService } from '../01-services/secrets.service';
import { ValueService } from '../01-services/value.service';

@Injectable()
export class MasterService {
  constructor(private valueService: ValueService, private secretsService?: SecretsService) {}

  getValue(): string {
    return this.valueService.getValue();
  }

  getSecretNumber(): number {
    return this.secretsService.getNumber();
  }
}
