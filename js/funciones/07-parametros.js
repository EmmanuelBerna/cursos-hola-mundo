/**
 * {
 *  url: ...
 *  bucket: amazon s3
 *  port:80
 * }
 */
const config = {
    url: 'https://google.com',
};

function configurarAPI(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI('https://google.com'));
