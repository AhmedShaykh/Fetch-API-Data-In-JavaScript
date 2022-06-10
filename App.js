console.log("Fetch Data API In JavaScript + ES6");

async function getAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api, "GET API");

    const json = await api.json();
    console.log(json, "Json")

}

getAPI();

async function postAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Learning',
            body: 'JavaScript',
            userId: 4,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // <=== Secrect Key or Token
        }
    });
    console.log(api, "POST API");

    const json = await api.json()
    console.log(json, "Json")
}

postAPI();