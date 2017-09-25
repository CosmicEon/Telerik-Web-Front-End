const config = require('./api/config/constants');

const startServer = () => {
    return Promise.resolve();
};

console.log('-------------------------------');
console.log('Starting Server...');
startServer()
    .then(() => {
        console.log('Initializing DB...');
        return require('./api/db/db').init(config.constants.mongoDbConnection);
    })
    .then((db) => {
        console.log('Initializing Data Layer...');
        return require('./api/data/data').init(db);
    })
    .then((data) => {
        console.log('Initializing Server...');
        return require('./api/config/init.app').init(data);
    })
    .then((app) => {
        app.listen(config.constants.serverPort, () => {
            console.log('-------------------------------');
            console.log(`Server is running on port :${config.constants.serverPort}`);
            console.log('-------------------------------');
        });
    })
    .catch((error) => {
        console.log(error);
    });
