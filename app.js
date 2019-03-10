var express = require("express");
var app = express();
var fs = require('fs');
var path = require('path');
var engine = require('ejs-locals');

const controllerFolder = "./app/controllers/";
var model = require("./app/models/viewModel");

app.set('views', path.join(__dirname, 'app/views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = 1111;
var returnData = model.modeldata;

app.all("/:controller/:action/:id?", (request, response) => {

    var controllerName = request.params.controller + ".controller.js",
        actionName = request.params.action.toLowerCase() + "_" + request.method.toLowerCase();

    if (fs.existsSync(controllerFolder + controllerName)) {
        var controllerModule = require(controllerFolder + controllerName);
        Object.keys(controllerModule).forEach(function (functionName) {
            if (functionName.toLowerCase() === actionName) {
                if (controllerModule[functionName]) {
                    returnData = controllerModule[functionName](request, response);
                }
            } else {
                returnData = {
                    isRedirect: false,
                    renderPage: "errorpages/notfound",
                    resultMessage: "Action Bulunamadı",
                    statusCode: 404
                }

            }
        });
    } else {
        returnData = {
            isRedirect: false,
            renderPage: "errorpages/notfound",
            resultMessage: "Controller Bulunamadı",
            statusCode: 404
        }
    }

    console.log(returnData)
    if (returnData.isRedirect) {
        response.redirect(returnData.redirectUrl);
    } else {
        response.status(returnData.statusCode).render(returnData.renderPage, returnData.renderData);
    }

});

app.listen(port, () => {
    console.log(port + " port adresinde çalışmaya başladı..");
});