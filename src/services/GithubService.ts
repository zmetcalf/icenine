import request from 'request-promise';

export default class GithubService {
  repoDetails: GithubRepo | undefined;
  pullRequestDetails: Array<PullRequestDetail> = [];

  constructor(gitUrl: string) {
    this.setRepoInfo(gitUrl);
  }

  async getData() {
    await this.fetchFromAPI();
    return this.pullRequestDetails;
  }

  private async fetchFromAPI() {
    // TODO Throw error
    if(!this.repoDetails) return;
    try {
      // TODO fix request
      (await request(`/repos/${this.repoDetails.owner}/${this.repoDetails.repo}`))
    } catch (e) {

    }
  }

  private setRepoInfo(gitUrl: string) {
    // TODO Make better implementation
    const partials = gitUrl.split('/');
    this.repoDetails = { repo: partials.pop() || '', owner: partials.pop() || ''}
  }
}
