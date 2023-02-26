Buenas, aqui os ponemos todas las funcionalidades de nuestra api, tb os dejamos comentarios por el codigo para q veais donde lo hace.

COMPONENTES:
-- Creamos un componente Button con la clase 'button q despues utilizamos en varias views, y le pasamos el texto por Props.
-- Creamos un Footer que utilizamos en varias views con nuestros gitHub y un acceso a comentarios de nuestros usuarios que te manda a la pagina de login para que hagas el login y despues ya te envia a ver los posts.
-- Creamos un Form con todos sus inputs controlados.
-- Creamos un spinner personalizado que utilizamos en el login y en el register mientras carga la respuesta de la api.
-- Creamos un navbar que es nuestro header para ir a todas la vistas de nuestra pagina, y tb le incluimos un buscador de personajes dentro.

SERVICES:
-- Hacemos una llamada a la api de Rick & Morty, para despues utilizarla a traves de APP y cojer datos en diferentes views.
-- Hacemos otra llamada a la api para crear un search y despues utilizarla en un buscador que te trae personaje por nombre.

ACTIONS Y REDUX:
-- Hacemos una carpeta actions y redux en la que hacemos unos posts simulados como hicimos en el ejercicio de clase.

VIEWS:
-- Creamos view Home que muestra nuestra pagina principal de inicio, con un navbar desde donde puedes ir a todos los componentes de nuestra pagina. Y con un buscador y una carta random q se cambia cada vez q vuelves al Home, el logotipo de la imagen de Rick and Morty clicandolo te lleva al home.
-- En nuestro componente APP creamos variables de estado y funciones que despues necesitamos en nuestras diferentes views o componentes y se las pasamos por props y creamos todas nuestras rutas.
-- Creamos view AllCharacters que trae listado de personajes con su id y nombre, q si pinchas en uno te lleva a carta completa de ese personaje, y tb con una paginacion.
-- Creamos view CardCharacter que es la carta completa con muchos datos del personaje del que hagas click desde nuestra lista, esta creado con el fondo de portal de la serie.
-- Creamos view Character q es nuestro li de la view MiniCard que es en la que filtras por genero y aqui tb segun el estado del personaje sea vivo, muerto o unknown, le pinta ese dato en azul, rojo o gris.
-- Creamos view Comments que nos trae post ficticios con redux que los incorporamos como si fueran comentarios de nuestros usuarios y que para verlos tienes que pasarte hacer login.
-- Creamos view ErrorMorty que es una vista personalizada q se te muestra como error general cuando escribes mal la url, PROBARLO PARA VERLO QUE ESTA BASTANTE CHULO.
-- Creamos view Gender que tiene un select en el que elijes por genero y te filtra las Minicard por chico, chica o todos.
-- Creamos view Minicard que es un ul que trae nuestro li Character, q filtras con un select por genero y en la carta te la pinta diferentes segun su status.
-- Creamos view Register para que pueda registrarse cualquier usuario, que esta enlazada con nuestro backend q esta levantado en vercel, el formulario te manda mensaje personalizado si se hizo correctamente o si dio error, carga el componente Loader mientras carga la respuesta, y tb desaparece el formulario cuando ya no es necesario, tb tiene un button para actualizar la pagina si te has registrado mal.
-- Creamos view Login para que pueda hacer login cualquier usuario, que esta enlazada con nuestro backend q esta levantado en vercel, el formulario te manda mensaje personalizado si se hizo correctamente o si dio error, carga el componente Loader mientras carga la respuesta, y tb desaparece el formulario cuando ya no es necesario, tb tiene un Link en el que te puedes registrar si aun no lo estas y otro que te manda a nuestros Post ficticios si te hiciste bien el Login.
