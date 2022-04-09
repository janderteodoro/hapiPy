const registerContactRoute = (server) => {
    server.route({
        method: 'POST', 
        path: '/registercontact', 
        handler: (request, h) => {
            console.log('AQUIIIIIIIIIIII', h); 
            return {
                message: 'Register Contact'
            };
        }
    });
}

module.exports = registerContactRoute;