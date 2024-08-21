import capitalize from './index';

describe('capitalize', () => {
  it('should capitalize the first letter of each word in a string', () => {
    expect(capitalize('hello world')).toBe('Hello World');
    expect(capitalize('javaScript is awesome')).toBe('Javascript Is Awesome');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle undefined input', () => {
    expect(capitalize(undefined)).toBeUndefined();
  });

  it('should handle strings with multiple spaces', () => {
    expect(capitalize('  hello   world  ')).toBe('  Hello   World  ');
  });
});
