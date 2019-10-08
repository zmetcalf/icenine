import request from 'request-promise';

class GithubService {
  repo: GithubRepo | undefined;
  pullRequestDetails: Array<PullRequestDetail> = [];

  constructor(private gitUrl: string) {
    this.setRepoInfo(gitUrl);
  }

  async getData() {
    await this.fetchFromAPI();
    return this.pullRequestData();
  }

  private async fetchFromAPI() {
    try {
      (await request(this.gitUri))
    } catch (e) {

    }
  }

  private setRepoInfo(gitUrl: string) {

  }
}
