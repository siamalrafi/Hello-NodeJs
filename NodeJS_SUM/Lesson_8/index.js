/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require('string_decoder');
const { handleReqRes } = require("./helpers/handleReqRes");


const app = {};

// configuration
app.config = {
    port: 3000
};


app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log("Server listening on port 3000");
    })
};

app.handleReqRes = handleReqRes;


// server starting 
app.createServer();



