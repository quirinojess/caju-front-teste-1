import ThemeMain from './ThemeMain';

describe('ThemeMain', () => {
  Object.keys(ThemeMain).forEach((key) => {
    it(`should have the "${key}" property`, () => {
      expect(ThemeMain).toHaveProperty(key);
    });
  });
});
