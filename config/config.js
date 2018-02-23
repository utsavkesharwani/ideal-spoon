const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'ideal-spoon'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:admin@localhost/ideal_spoon_development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ideal-spoon'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:admin@localhost/ideal_spoon_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ideal-spoon'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:admin@localhost/ideal_spoon_production'
  }
};

module.exports = config[env];
