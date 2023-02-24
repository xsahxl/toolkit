import simpleGit, { SimpleGit } from 'simple-git';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs-extra';
import { IInitConfig } from './types';
const debug = require('debug')('serverless-cd:git/init-config');

export default async function initConfig(config: IInitConfig) {
  const { userName, userEmail } = config;
  const execDir = config.execDir || os.tmpdir();
  const configExecDir: any = path.isAbsolute(execDir) ? execDir : path.join(process.cwd(), execDir);
  debug(`execDir: ${configExecDir}`);
  fs.ensureDirSync(configExecDir);

  const git: SimpleGit = simpleGit(configExecDir);

  await git.init();
  debug('Git init successfully');

  await git.addConfig('user.name', userName).addConfig('user.email', userEmail);

  debug(`Git config successfully`);
}
