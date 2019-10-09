# icenine

## Hotel Engine Code Test

### Requirements
node v12.8.1+

### Install
`npm i`

### Test

`npm test`

### Usage

This utility may be used as directly or added added to path to be used in other repos.

Directly

`./icenine -u https://github.com/facebook/react`

In the root directory of a git repo (directory containing .git)

`~/repos/icenine`

### Flags

`-u` or `--url` followed by github repo url.

`-p` or `--page` followed by page to pull. 30 at a time will be pulled. Default: `1`

`-e` Show errors

### Requirements

Using the GitHub API ( https://developer.github.com/v3 ), we ask that you build
a Node.js app that displays info for the open pull requests in a GitHub repository. The
interface can take whatever form you like and should accept a repository URL, for
example https://github.com/hapijs/hapi. It should display a list of open pull requests
along with the number of commits in that PR, the number of comments on the PR, and
the user that opened it.
