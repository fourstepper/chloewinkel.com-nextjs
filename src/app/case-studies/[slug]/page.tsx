import fs from "fs/promises";
import * as path from 'path';
import glob from 'fast-glob'
import { MDXRemote } from 'next-mdx-remote/rsc'

const getNoteSlugs = async (): Promise<string[]> => {
  // list all .mdx files in "/notes"
  const mdxFiles = await glob("*.mdx", {
    cwd: path.join(process.cwd(), "case-studies"),
    dot: false,
  });

  // strip the .mdx extensions from filenames
  const slugs = mdxFiles.map((fileName) => fileName.replace(/\.mdx$/, ""));

  return slugs;
};

export async function generateStaticParams() {
  return getNoteSlugs()
}

async function Testing({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "case-studies", slug + ".mdx")
  const caseStudyMDX = await fs.readFile(filePath, 'utf8');
  //
  // // This is dirty af. Should not be done like this. The filesystem is not a database.

  return (
    <MDXRemote source={caseStudyMDX}/>
  );
}

export default Testing
