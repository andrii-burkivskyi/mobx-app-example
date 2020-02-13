require('ts-node').register({
    cache: false,
    project: "./configs/server/tsconfig.json"
});

require('./src/server/main');