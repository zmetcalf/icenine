import url from 'url';

import GithubService from './services/GithubService';
import { getUrlFromFS } from './services/RepoService';
import UrlError from './errors/UrlError';

export const validateUrl = (gitUrl: string): void => {
  try {
    const result  = url.parse(gitUrl);
    if(result.hostname !== 'github.com') throw new UrlError(
      'This is not a github url'
    );

    if(!result.path || result.path.split('/').length !== 3) throw new UrlError(
      'Additional or missing owner and repo fields in Url. Do not include trailing slash'
    )
  } catch (e) {
    if(e instanceof URIError) {
      throw new UrlError('Invalid URL')
    }

    // Bubble error
    throw e;
  }
};

export const getByUrl = async (gitUrl: string, page: number = 1) => {
  validateUrl(gitUrl);
  const service = new GithubService(gitUrl, page);
  return await service.getData();
};

export const getByCurrentDir = async (page: number = 1) => {
  const gitUrl = await getUrlFromFS();
  validateUrl(gitUrl);

  const service = new GithubService(gitUrl, page);
  return await service.getData();
};

