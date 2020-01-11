var aws = require('aws-sdk'); 
var S3 = new aws.S3();

exports.handler = async (event) => {
    // TODO implement
    	const response = {
        	statusCode: 200,
        	body: JSON.stringify('Hello from Lambda!'),
    	};
    
   	var srcBucket = event.Records[0].s3.bucket.name;
    	var srcKey = event.Records[0].s3.object.key;
    
  	console.log(srcBucket);
   	console.log(srcKey);
	var params = {
		Bucket: srcBucket,
		Key: srcKey
	}
	
	function wait(){
		return new Promise((resolve, reject) => {
			setTimeout(() => 
				S3.getObject(params, function(err, data){
					console.log("Inside get object");
					console.log(data);
					console.log(err);
					var bodyObject = data.Body.toString('ascii');
					bodyObject += "uploaded at" + new Date().toISOString();
					console.log(bodyObject);

					paramsToPut = {
						Body: bodyObject,
						Key: srcKey,
						Bucket: 'lab6.bucket.mamajews.copied' 
					}
				

					S3.putObject(paramsToPut, function(err,data){
						console.log(err);
						console.log(data);
						console.log("Inside put object");
					})

				}),2000)
		});
	}
	
	await wait();
   	return response;
};

