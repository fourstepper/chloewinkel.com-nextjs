import { readdir, readFile } from 'fs/promises';
// import fs from "fs";
import path from 'path';
import YAML from 'yaml';

const PATH = path.join(process.cwd(), 'src/app/case-studies');

// get a list of directories (routes) in the case-studies dir
const getDirectories = async (path_: string) =>
  (await readdir(path_, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

// export metadata
export const CaseStudiesMetadata = async () => {
  const directories = await getDirectories(PATH);
  const object: Array<{
    config: { title: string; type: string };
    directory: string;
  }> = [];

  for (const directory of directories) {
    const config = async () => {
      return YAML.parse(
        await readFile(path.join(PATH, `./${directory}/config.yaml`), 'utf8'),
      );
    };

    object.push({ config: await config(), directory });
  }

  return object;
};
