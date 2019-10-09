export const logPRs = (prs: Array<PullRequestDetail>): void => (
  prs.forEach((pr: PullRequestDetail) => (
    console.log(`${pr.title} - Opened By ${pr.user} with ${pr.commits} commit. ${pr.comments} comments have been made`)
  ))
);

export const error = (err: Error): void => console.error(err);
