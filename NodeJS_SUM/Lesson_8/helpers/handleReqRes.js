/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies

const url = require("url");
const { StringDecoder } = require('string_decoder');

// module definitions



const handler = {};

handler.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    /* const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
 */
    const decoder = new StringDecoder('utf-8');
    let realData = "";

    req.on("data", (buffer) => {
        realData += decoder.write(buffer);

    });

    req.on("end", () => {
        realData += decoder.end();

        console.log(realData);
        // response handle
        res.end('Hello world');
    });

};

module.exports = handler;





