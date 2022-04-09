const contactRoute = (server) => {
    server.route({
        method: 'GET', 
        path: '/contact',
        handler: (request, h) => {
            return {
                message: 'This is contact route'
            };
        }
    });
}

module.exports = contactRoute;
