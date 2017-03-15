var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);// pode chamar a função tanto assim.

var rotaHome = require('./app/routes/home')(app); // quanto assim. Aqui diminui linhas de codigo oque me parece mais viável.

var rotaFormNoticia = require('./app/routes/formulario_noticias')(app);

app.listen(3000,function () {
	console.log('Servidor ON');
});