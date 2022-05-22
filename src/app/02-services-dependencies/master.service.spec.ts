/* tslint:disable:no-unused-variable */

import { MasterService } from './master.service';
import { ValueService } from '../01-services/value.service';
import { SecretsService } from '../01-services/secrets.service';

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getSecretNumber should return real value from the real service', () => {
    masterService = new MasterService(new ValueService(), new SecretsService());
    expect(masterService.getSecretNumber()).toBe(123456);
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake = { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('#getSecretNumber should return faked value from a fake object', () => {
    const fake = { getNumber: () => 987654321 };
    masterService = new MasterService(new ValueService(), fake as SecretsService);
    expect(masterService.getSecretNumber()).toBe(987654321);
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue()).toBe(stubValue, 'service returned stub value');
    expect(valueServiceSpy.getValue.calls.count()).toBe(1, 'spy method was called once');
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });
});
