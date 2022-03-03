// console.log("Fetch API Data In JavaScript + ES6");

// async function getAPI() {
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(api, "GET API");

//     const json = await api.json()
//     console.log(json, "Json")

// }

// getAPI()

async function postAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Yoo',
            body: 'bang',
            userId: 4,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    console.log(api, "POST API");

    const json = await api.json()
    console.log(json, "Json")
}

postAPI()