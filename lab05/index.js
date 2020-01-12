const AWS = require('aws-sdk');
const BUCKET_NAME = 'testy.s3cmd';
const s3 = new AWS.S3();
const fs = require('fs');

var speed = [];
const array = [1, 2, 3, 4, 5];
const uploadToS3 = async (array) => {
    for (const item of array) {
        const body = fs.createReadStream(item.toString());
        const params = {
            Bucket: BUCKET_NAME,
            Key: item.toString(),
            Body: body
        };

        console.log("Uploading..." + item);
        var start = new Date();
        try {
            const stored = await s3.upload(params).promise();
        } catch (err) {
            console.log(err);
        }
        var end = new Date();
        console.log(start);
        console.log(end);
        console.log("Speed: %ds", 80000/ ((end - start) / 1000));
        speed.push(80000 / ((end-start)/ 1000));
    }
};

uploadToS3(array).then(r => console.log("Finished!"));
console.log(speed => speed.reduce((a,b) => a + b, 0) / speed.length);
//
//
// const params = {
//     Bucket: BUCKET_NAME,
//     Key: item,
//     Body: body
// };
//
// console.log("Uploading..." + item);
// var start = new Date();
// try {
//     const stored =  s3.upload(params).promise();
// } catch (err) {
//     console.log(err);
// }
// var end = new Date();
// console.log("Speed: %dms", 80000 / (end - start * 1000));