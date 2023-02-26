//-Creamos una función que se inicie con los valores de page a 1 y de name como un string vacío, que haga un fetch al link pertinente y que nos devuelva la respuesta.

const searchApi = (page = 1, name = "") => {
    return fetch (`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`)
    .then((res) => res.json())
    .then((res) => {
        return res;
    });
};

export default searchApi;