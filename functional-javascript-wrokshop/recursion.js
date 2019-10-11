// program to find duplicated dependencies and sub-dependencies with recursive method

module.exports = getDependencies = (tree, res) => {
  var res = res || [];

  var dependencies = (tree && tree.dependencies) || {};

  Object.keys(dependencies).forEach((item, index) => {
    const dependency = `${item}@${dependencies[item].version}`;
    if (res.indexOf(dependency) === -1) {
      res.push(dependency);
    }

    getDependencies(dependencies[item], res);
  });

  return res.sort();
};
