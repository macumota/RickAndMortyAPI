
const callApi = (numPage) => {

    return fetch(`https://rickandmortyapi.com/api/character/?page=${numPage}`)
    .then((res) => res.json())
    .then((res) => {
        const myData = [ ...res.results ];
        return myData;
    });
};

export default callApi;