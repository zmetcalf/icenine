import { validateUrl } from '../src/Facade';

import UrlError from '../src/errors/UrlError';

describe('Facade', () => {
  describe('validateUrl', () => {
    it('should ensure url is github', () => {
      expect(() => validateUrl('https://github.com/hapijs/hapi'))
        .not.toThrowError();
    });
  });

  it('should throw UrlError with url from different domain', () => {
    expect(() => validateUrl('https://bitbucket.com/test/repo'))
      .toThrowError(UrlError);
  });

  it('should throw UrlError with missing owner and repo', () => {
    expect(() => validateUrl('https://github.com/hapijs'))
      .toThrowError(UrlError);
    expect(() => validateUrl('https://github.com'))
      .toThrowError(UrlError);
  })
});
