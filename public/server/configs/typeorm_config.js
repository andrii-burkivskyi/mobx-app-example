"use strict";
const config = {
    type: 'sqlite',
    database: 'public/server/database.sqlite',
    synchronize: true,
    logging: false,
    entities: ['src/server/models/**/*.entity.ts'],
};
module.exports = config;
//# sourceMappingURL=typeorm_config.js.map