import { emailRegex, nameRegex } from './index';

describe('Regex Tests', () => {
  describe('emailRegex', () => {
    it('Should match valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co',
        'user_name@domain.com',
        'user-name@domain.com',
        'user+name@domain.com',
      ];
      validEmails.forEach((email) => {
        expect(emailRegex.test(email)).toBe(true);
      });
    });

    it('Should not match invalid email addresses', () => {
      const invalidEmails = ['plainaddress', '@missingusername.com'];
      invalidEmails.forEach((email) => {
        expect(emailRegex.test(email)).toBe(false);
      });
    });
  });

  describe('nameRegex', () => {
    it('Should match valid names', () => {
      const validNames = [
        'John Doe',
        'Jane Smith',
        'Alice Johnson',
        'Bob Brown',
      ];
      validNames.forEach((name) => {
        expect(nameRegex.test(name)).toBe(true);
      });
    });

    it('Should not match invalid names', () => {
      const invalidNames = ['JohnDoe', '1235', 'J', 'John'];
      invalidNames.forEach((name) => {
        expect(nameRegex.test(name)).toBe(false);
      });
    });
  });
});
