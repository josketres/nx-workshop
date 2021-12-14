import { formatFiles, getProjects, installPackagesTask, ProjectConfiguration, Tree, updateJson } from '@nrwl/devkit';

export default async function(tree: Tree, schema: any) {

  const scopes = getScopes(getProjects(tree));
  console.log(scopes);

  await updateJson(tree, 'tools/generators/util-lib/schema.json', json => {
    const items = json.properties.directory['x-prompt'].items.map(i => i.value);
    scopes.forEach(scope => {
      if (items.indexOf(scope) === -1) {
        console.log('new scope: ' + scope);
        json.properties.directory['x-prompt'].items = [
          ...json.properties.directory['x-prompt'].items,
          {
            value: scope,
            label: scope
          }
        ];
      }
    });
    return json;
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

function getScopes(projectMap: Map<string, ProjectConfiguration>) {
  const projects: any[] = Array.from(projectMap.values());
  const allScopes: string[] = projects
    .map((project) =>
      project.tags
        // take only those that point to scope
        .filter((tag: string) => tag.startsWith('scope:'))
    )
    // flatten the array
    .reduce((acc, tags) => [...acc, ...tags], [])
    // remove prefix `scope:`
    .map((scope: string) => scope.slice(6));
  // remove duplicates
  return Array.from(new Set(allScopes));
}
