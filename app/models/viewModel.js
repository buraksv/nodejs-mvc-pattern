var model = {
    renderPage: String,
    renderData: Object,
    resultMessage: String,
    statusCode: Number,
    isRedirect: Boolean,
    redirectUrl: String,
}

module.exports = {
    view: function ({
        renderPage = "",
        renderData = "",
        resultMessage = "",
        statusCode = 200,
        isRedirect = false,
        redirectUrl = ""}) {

            model = {
                isRedirect: isRedirect,
                redirectUrl: redirectUrl,
                renderData: renderData,
                renderPage: renderPage,
                resultMessage: resultMessage,
                statusCode: statusCode
            };
        return model
    },
    modeldata : model
}