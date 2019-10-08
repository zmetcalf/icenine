import nodegit from 'nodegit';

class RepoService {
  constructor(repoPath: string) {

  }

  async getUrlFromFS() {
    // https://stackoverflow.com/questions/51404727/getting-git-repository-url-with-nodegit
    const repo = await nodegit.Repository.open(".git");
    const config = await repo.config();
    const buffer = await config.getStringBuf("remote.origin.url");
    return buffer && buffer.toString();
  }
}

