class LambdaFunctionReader{
    constructor() {
        this.connectToServer();
        this.functionReponse = [{
            name: 'Hello World',
            _id: 'xyz'
        }, {
            name: 'Hello World Lambda',
            _id: 'abc'
        }];
        this.functionNames = ['Hello World', 'Hello World Lambda'];
    }
    connectToServer(){

        console.log('I am trying to connect with AWS server')
    }
    getFunction(){
        console.log('Getting the function names from the AWS Server');
        this.parseFunctionResponse();
        this.displayFunctionNames();
    }

    parseFunctionResponse(){
        console.log('I am parsing the function names', this.functionReponse);
    }

    displayFunctionNames(){
        console.log('After parsing I am displaying the names', this.functionNames);
    }
}

const lambdaFunctionReader = new LambdaFunctionReader();
lambdaFunctionReader.getFunction();