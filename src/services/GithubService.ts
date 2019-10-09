import request from 'request-promise';

import AppError from "../errors/AppError";
import GithubPullRequestFactory from "../factories/GithubPullRequestFactory";
import RequestError from "../errors/RequestError";
import { GITHUB_URL } from "../constants";

export default class GithubService {
  repoDetails: GithubRepo | undefined;
  pullRequestDetails: Array<PullRequestDetail> = [];

  constructor(gitUrl: string, private page: number) {
    this.setRepoInfo(gitUrl);
  }

  async getData() {
    await this.fetchFromAPI();
    return this.pullRequestDetails;
  }

  private async fetchFromAPI() {
    // Should not happen
    if(!this.repoDetails) throw new AppError(
      'icenine encountered an before requesting from Github'
    );

    try {
      const pullRequests: Array<GithubPullRequest> = await request(
          `${GITHUB_URL}/repos/${this.repoDetails.owner}/${this.repoDetails.repo}/pulls?page=${this.page}`,
        { json: true, headers: { 'User-Agent': 'zmetcalf' } }
      );

      this.pullRequestDetails = (await Promise.all(
        pullRequests.map((pullRequest: GithubPullRequest) => (
          request(pullRequest.url, { json: true, headers: { 'User-Agent': 'zmetcalf' } })
        )))).map(GithubPullRequestFactory);
    } catch (e) {
      throw new RequestError(e.message);
    }
  }

  private setRepoInfo(gitUrl: string): void {
    const partials = gitUrl.split('/');
    this.repoDetails = {
      repo: this.cleanGit(partials.pop() || ''),
      owner: partials.pop() || ''
    };
  }

  private cleanGit(repo: string): string {
    if(repo.indexOf('.git') === -1) return repo;
    return repo.split('.')[0];
  }
}
