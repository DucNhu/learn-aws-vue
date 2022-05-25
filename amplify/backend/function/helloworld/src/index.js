/* Amplify Params - DO NOT EDIT
	API_LEARNAWSVUE_GRAPHQLAPIENDPOINTOUTPUT
	API_LEARNAWSVUE_GRAPHQLAPIIDOUTPUT
	API_LEARNAWSVUE_GRAPHQLAPIKEYOUTPUT
	AUTH_LEARNAWSVUE71ADA016_USERPOOLID
	FUNCTION_ADDUSER_NAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
