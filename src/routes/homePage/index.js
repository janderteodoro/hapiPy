const homePageRoute = (server) => {
    server.route({
        method: 'GET', 
        path: '/', 
        handler: (request, h) => {
            return {
                message: 'This is Home Page'
            };
        }
    });
}

module.exports = homePageRoute;
