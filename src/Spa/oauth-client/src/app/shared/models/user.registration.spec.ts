import { UserRegistration } from './user.registration';

describe('User.Registration', () => {
  it('should create an instance', () => {
    expect(new UserRegistration("","","")).toBeTruthy();
  });
});
