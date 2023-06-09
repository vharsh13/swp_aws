// Import the AWS SDK
const AWS = require('aws-sdk');

// Create an instance of the Lambda service
const lambda = new AWS.Lambda();

// Function to get the count of Lambda functions
async function getLambdaFunctionCount() {
    try {
        // Call the ListFunctions API to retrieve the list of functions
        const response = await lambda.listFunctions().promise();

        // Retrieve the count from the response
        const count = response.Functions.length;

        // Return the count
        return count;
    } catch (error) {
        console.error('Error retrieving Lambda function count:', error);
        throw error;
    }
}

// Example usage
getLambdaFunctionCount()
    .then(count => {
        // Display the count in an alert
        alert(`Number of Lambda functions: ${count}`);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });
