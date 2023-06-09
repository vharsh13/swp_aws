const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        event,
        body: JSON.stringify('Hello from Lambda!'),
    };
    console.log(response);
    return response;
};

exports.handler = handler;