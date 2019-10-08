import GithubService from '../../src/services/GithubService';

describe('GithubService', () => {
  describe('constructor', () => {
    it('should set repo object', () => {
      expect((new GithubService('https://github.com/hapijs/hapi')).repoDetails)
        .toStrictEqual({ owner: 'hapijs', repo: 'hapi' });
    });
  });
});
