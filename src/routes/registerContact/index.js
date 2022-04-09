const registerContactRoute = (server) => {
    server.route({
        method: 'POST', 
        path: '/registercontact', 
        handler: (request, h) => {
            const { headers, query } = request;
            console.log(headers, '\n\n', query);
            return {
                message: 'Register Contact'
            };
        }
    });
}

module.exports = registerContactRoute;