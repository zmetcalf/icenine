import program from 'commander';
import ErrorService from './services/ErrorService';
import Facade from './Facade';
import LogService from "./services/LogService";

program
  .version('1.0.0')
  .option('-u, --url <path>', 'Repository Url to view pull requests')
  .action(async (cmd, options) => {
    try {
      if(options.url) {
        LogService.logPRs(await Facade.getByUrl(options.url));
      }

      LogService.logPRs(await Facade.getByCurrentDir(process.cwd()));
    } catch (e) {
      return ErrorService.handleAppError(e);
    }
  });

program.parse(process.argv);
