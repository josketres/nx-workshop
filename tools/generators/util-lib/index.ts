import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export interface Schema {
  name: string;
  directory: string;
}

export default async function(tree: Tree, schema: Schema) {
  await libraryGenerator(tree, {
    name: `${schema.directory}/util-${schema.name}`,
    tags: `type:util,scope:${schema.directory}`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
