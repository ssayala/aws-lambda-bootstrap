var debug = function(error, result) {
    if (error) {
        console.log('error occured');
    }
    console.log(result);
}
exports.handler = function (event, context, callback) {
    //grunt-aws-lambda doesnt yet support callback
    if (!callback) {
        callback = debug;
    }
    callback(null,"done");
}

