import YAML from "yaml";
import { readdir, readFile, stat } from "fs/promises";
// import fs from "fs";
import path from "path";

const PATH = path.join(process.cwd(), "src/app/case-studies");

// get a list of directories (routes) in the case-studies dir
const getDirectories = async (PATH: string) =>
  (await readdir(PATH, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

// export metadata
async function CaseStudiesMetadata() {
  const directories = await getDirectories(PATH);
  const object: {
    directory: string;
    config: { title: string; type: string };
  }[] = [];

  for (const directory of directories) {
    let config = async () => {
      return YAML.parse(
        await readFile(path.join(PATH, `./${directory}/config.yaml`), "utf8")
      );
    };
    object.push({ directory: directory, config: await config() });
  }

  return object;
}

export default CaseStudiesMetadata;
