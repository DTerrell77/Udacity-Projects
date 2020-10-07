import { verify } from './checkWebsite'

describe('verify the url', () => {
  it('should expect to return a valid url', () => {
    expect(verify('google.com')).toBe(true);
  });

  it('should expect to return an invalid url', () => {
    expect(verify('test')).toBe(false);
  });
});

