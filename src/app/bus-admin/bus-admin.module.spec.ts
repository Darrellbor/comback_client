import { BusAdminModule } from './bus-admin.module';

describe('BusAdminModule', () => {
  let busAdminModule: BusAdminModule;

  beforeEach(() => {
    busAdminModule = new BusAdminModule();
  });

  it('should create an instance', () => {
    expect(busAdminModule).toBeTruthy();
  });
});
