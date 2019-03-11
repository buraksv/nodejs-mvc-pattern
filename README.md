# nodejs-mvc-pattern

Node.js için yapmış olduğum MVC pattern projesidir.

# Kullanım hakkında 

 - /app/controllers altında controller.js dosyaları oluşturulur. (örn : product.controller.js)
 - Actionlar için function yazmamız gerekmekte. (GET,POST vb. istekler için functionName_get & functionName_post)
 - /app/model/viewModel.js dosyasında view için kendi modelinizi türetebilirsiniz.
 - View Engine olarak ejs kullanılmaktadır.
 - Örnek olarak sunulan app/controllers/home.controller.js - app/views/home - app.js - app/models/viewModel.js dosyaları incelenebilir.

### /app/controllers/home.controller.js
```javascript
exports.index_get = function (request, response) { // Action name = index Request Type = Get === index_get
    return returnModel.view({ 
        renderPage: "home/index", // ejs tarafında render edilmesi istenilen sayfa pathi
        renderData:{ // Sayfaya gönderilecek veriler obje olarak bu alana doldurulur
            title:"Index" //Örn : Title bilgisi
        },
        resultMessage="Sayfa başarıyla açıldı",
        statusCode=200, // Status Code bilgisi
        isRedirect=false, // Redirect mi ?
        redirectUrl ="" // Redirect olması istenilen url bilgisi.
    });   // Daha fazla alan eklenip geliştirilmek istenilirse /app/models/viewModel.js dosyası güncellenebilir.
}
```

### /app/models/viewModel.js
```javascript
var model = {
    renderPage: String,
    renderData: Object,
    resultMessage: String,
    statusCode: Number,
    isRedirect: Boolean,
    redirectUrl: String,
} // Controller ve app.js tarafında kullanılan model.

module.exports = { // Controller tarafında çağıracağımız view methodunu export ediyoruz.
    view: function ({ // Alacağı parametreler ile modelimizi dolduruyoruz.
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
    },// Modeli return ediyoruz.
    modeldata : model // app.js tarafından model tanımlanabilsin diye default olarak bir nesne olarak modeli export ediyoruz.
}
```


### /app/views/home/index.ejs
```html
<% layout('../shared/_layout') -%> <!-- Layout seçimi -->

 <h1>Index</h1>   <!-- Html kodları -->
```
