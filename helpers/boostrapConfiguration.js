const fs = require('fs');
const {Router} = require('express');

const configs = [];

const entityFolder = __dirname + '/../entity/';
const configFileName = 'config.js';
const controllerFileName = 'controller.js';

const isDirectory = source => fs.lstatSync(entityFolder + source).isDirectory();
const getSource = source => entityFolder+source+'/'+configFileName;
const getSourceController = source => entityFolder+source+'/'+controllerFileName;
const fileExists = source => fs.existsSync(source);
const loadConfig = (config) => configs.push(config);

function configurationServer() {

    const files = fs.readdirSync(entityFolder);
    console.table(files);

    const entities = files.filter(isDirectory);
    console.table(entities);

    entities.forEach((folder) => {

        const sourceConfig = getSource(folder);
        const sourceController = getSourceController(folder);

        if (!fileExists(sourceConfig)) return;

        const config = require(sourceConfig);

        if (fileExists(sourceController)) {
            const controller = require(sourceController);
            let types = {};
            config.routes.forEach(r => {
                if (!controller[r.type]) return;
                types[r.type] = controller[r.type];
            });
            const actions = {...types};
            console.log(actions);
            const routeConfiguration = {...config, actions};
            console.log(routeConfiguration);
            loadConfig(routeConfiguration);
        }
    });

    console.log(configs);

}



function configurateRouter(configurations) {
    configurations.forEach(c => {
        const router = Router();
        const {routes} = c;

        routes.forEach(r => {
            router[r.method](r.path, );
        });
    });
}

configurationServer();


exports.configurationServer = configurationServer;