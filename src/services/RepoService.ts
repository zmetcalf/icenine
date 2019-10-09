import nodegit from 'nodegit';

export const getUrlFromFS = async (): Promise<string> => {
    // https://stackoverflow.com/questions/51404727/getting-git-repository-url-with-nodegit
    const repo = await nodegit.Repository.open(".git");
    const config = await repo.config();
    const buffer = await config.getStringBuf("remote.origin.url");
    return buffer && buffer.toString();
}

