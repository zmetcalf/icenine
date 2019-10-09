interface GithubRepo {
  owner: string,
  repo: string,
}

interface PullRequestDetail {
  title: string,
  commits: number,
  comments: number,
  user: string,
}

interface GithubPullRequest {
  url: string,
  title: string,
  user: {
    login: string,
  },
  comments: number,
  commits: number,
}

interface UntypeObject {}

interface User {
  name: string
}
