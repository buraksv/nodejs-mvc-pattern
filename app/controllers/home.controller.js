const returnModel = require("../models/viewModel")

exports.index_get = function (request, response) {
    return returnModel.view({
        renderPage: "home/index",
        renderData:{
            title:"test"
        }
    });
}

exports.index_post = function (request, response) {
    return returnModel.view({
        renderPage: "home/index"
    })
}