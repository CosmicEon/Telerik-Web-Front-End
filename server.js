const config = require('./api/config/constants');

const startServer = () => {
    return Promise.resolve();
};

console.log('Starting app...');
startServer()
    .then(() => {
        console.log('Initializing db...');
        require('./api/db/db').init(config.constants.mongoDbConnection);
    })
    .then((db) => {
        console.log(db);
        console.log('Initializing data...');
        require('./api/data/data').init(db);
    })
    .then((data) => {
        console.log(data);
        console.log('Initializing app...');
        require('./api/app').init(data);
    })
    .then((app) => {
        console.log(app);
        app.listen(config.constants.serverPort, () => {
            console.log(`Server runs on port :${config.constants.serverPort}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
