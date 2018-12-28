import { FilhoModule } from './filho.module';

describe('FilhoModule', () => {
  let filhoModule: FilhoModule;

  beforeEach(() => {
    filhoModule = new FilhoModule();
  });

  it('should create an instance', () => {
    expect(filhoModule).toBeTruthy();
  });
});
