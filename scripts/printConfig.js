const path = require('path');

const printConfig = async (configPath) => {
  const config = await import(path.join(process.cwd(), configPath));

  console.dir(config, { depth: null });
};

printConfig(...process.argv.slice(2));
