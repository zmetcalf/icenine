import program from 'commander';
import { handleAppError } from './services/ErrorService';
import { getByCurrentDir, getByUrl } from './Facade';
import { logPRs } from "./services/LogService";

program
  .version('1.0.0')
  .option('-u, --url <path>', 'Repository Url to view pull requests')
  .option('-e', 'Show stack trace for errors')
  .option('-p, --page <page>', 'Which page to show: default 1. Shows 30 at a time.')
  .action(async cmd => {
    try {
      if(cmd.url) {
        return logPRs(await getByUrl(cmd.url, cmd.page));
      }

      logPRs(await getByCurrentDir(process.cwd(), cmd.page));
      process.exit(0);
    } catch (e) {
      return handleAppError(e, typeof cmd.e  === 'undefined');
    }
  });

program.parse(process.argv);
