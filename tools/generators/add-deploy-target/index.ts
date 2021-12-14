import { formatFiles, installPackagesTask, Tree, updateJson } from '@nrwl/devkit';

export interface Schema {
  project: string;
}

export default async function(tree: Tree, schema: Schema) {
  await updateJson(tree, `apps/${schema.project}/project.json`, json => {
    const deployTarget = {
      'deploy': {
        'executor': '@nrwl/workspace:run-commands',
        'outputs': [],
        'options': {
          'commands': [
            'nx build admin-ui',
            'npx surge dist/apps/store ${SURGE_DOMAIN_STORE} --token ${SURGE_TOKEN}'
          ],
          'parallel': false
        }
      }
    };
    return {
      ...json,
      targets: {
        ...json.targets,
        ...deployTarget
      }
    };
  });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
