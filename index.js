const { app, HttpResponse } = require('@azure/functions');

app.http('hello', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: "{*any}", 
    handler: async (request, context) => {
        // context.log(`Http function processed request for url "${request.url}"`);

        // const name = request.query.get('name') || await request.text() || 'world';

        return response();
    }
});

function response() {
    const response = new HttpResponse({ body: JSON.stringify({
        responseCode: 200,
        responseMessage: "Ok!",
        responseBody: {}
    })});
    response.headers.set('content-type', 'application/json');
    return response;
}
