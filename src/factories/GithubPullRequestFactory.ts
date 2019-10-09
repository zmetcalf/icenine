export default (pullRequest: GithubPullRequest): PullRequestDetail => ({
  title: pullRequest.title,
  user: pullRequest.user && pullRequest.user.login,
  comments: pullRequest.comments,
  commits: pullRequest.commits,
});
