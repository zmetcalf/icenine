import url from 'url';

import GithubService from './services/GithubService';

const validateUrl = (gitUrl: string): void => {
  try {
    const result  = url.parse(gitUrl);
    if(result.hostname !== 'github.com') {
      // Throw error
    }
  } catch (e) {
    if(e instanceof TypeError) {

    }
    if(e instanceof URIError) {

    }
    // Throw Generic
  }
};

export const getByUrl = async (gitUrl: string) => {
  validateUrl(gitUrl);
  const service = new GithubService(gitUrl);

};

export const getByCurrentDir = async (path: string) => {

};

