const fs = require('fs');
const { Router } = require('express');

const configs = [];

const entityFolder = __dirname + '/../entity/';
const configFileName = 'config.js';
const controllerFileName = 'controller.js';

// check if the file is a folder
const isDirectory = source => fs.lstatSync(entityFolder + source).isDirectory();
// get source config for each entity
const getFileConfig = source => entityFolder+source+'/'+configFileName;
// get controller filename for each entity
const getFileController = source => entityFolder+source+'/'+controllerFileName;
// check if the files exists
const fileExists = source => fs.existsSync(source);
// add the configuration to end of array
const loadConfig = (config) => configs.push(config);

function configurationServer() {

    const files = fs.readdirSync(entityFolder); // string array of files in the entity folder
    console.table(files);

    const entities = files.filter(isDirectory);
    console.table(entities);

    entities.forEach((folder) => {

        const fileConfig = getFileConfig(folder);
        const fileController = getFileController(folder);

        if ( ! fileExists(fileConfig) ) return;

        const config = require(fileConfig);

        if ( fileExists( fileController ) ) {
            const controller = require(fileController);
            let types = {};
            config.routes.forEach(r => {
                if ( ! controller[r.type] ) return;
                types[r.type] = controller[r.type]; // all types (methods) of this controller
            });
            const actions = {...types}; // actions === types
            console.log(actions);
            const routeConfiguration = {...config, actions};
            console.log(routeConfiguration);
            loadConfig(routeConfiguration);
        }
    });

    console.log(configs);
}

// WIP
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