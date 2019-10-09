import nodegit from 'nodegit';
import InvalidRepoError from "../errors/InvalidRepoError";

export const getUrlFromFS = async (): Promise<string> => {
    try {
        // https://stackoverflow.com/questions/51404727/getting-git-repository-url-with-nodegit
        const repo = await nodegit.Repository.open(".git");
        const config = await repo.config();
        const buffer = await config.getStringBuf("remote.origin.url");
        return buffer && buffer.toString();
    } catch (e) {
        throw new InvalidRepoError('This is not a valid git repo');
    }
};

