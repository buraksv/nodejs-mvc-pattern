# nodejs-mvc-pattern

Node.js için yapmış olduğum MVC pattern projesidir.

# Kullanım hakkında 

 - /app/controllers altında controller.js dosyaları oluşturulur. (örn : product.controller.js)
 - Actionlar için function yazmamız gerekmekte. (GET,POST vb. istekler için functionName_get & functionName_post)
 - /app/model/viewModel.js dosyasında view için kendi modelinizi türetebilirsiniz.
 - View Engine olarak ejs kullanılmaktadır.
 - Örnek olarak sunulan app/controllers/home.controller.js - app/views/home - app.js - app/models/viewModel.js dosyaları incelenebilir.
