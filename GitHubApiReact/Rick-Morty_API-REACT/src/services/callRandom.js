
const callRandom = (id) => {

    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((res) => {
        const myData = res;
        return myData;
    });
};

export default callRandom;