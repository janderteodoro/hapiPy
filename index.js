const server = require('./src/server'); 
const Routes = require('./src/routes')
const Hapi = require('@hapi/hapi'); 
const { contactRoute } = require('./src/routes');

const init = async (server) => {
    
    await server.start(); 

    Routes.homePageRoute(server);
    Routes.contactRoute(server);
    Routes.registerContactRoute(server)

    process.on('unhandledRejection', (err) => {
    
        console.log(err);
        process.exit(1);
    });
    
}

init(server(Hapi))