// scoping 

// let parent = document.getElementById("parent")
let parent = document.getElementById("parent")

function fetchData() {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "app-id": "644166b299b42468aa4e9a25"
    }
    fetch("https://dummyapi.io/data/v1/user", {
        method: "GET",
        headers: headersList
    })
        .then((res) => res.json())
        .then((res) => printCard(res))
        .catch((res) => console.log("this is and error", res))
}

fetchData()

function printCard(res) {
    console.log(res.data)
     res.data.map((item) => parent.innerHTML += `
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src="${item.picture}" class="card-img-top" alt="face image of the users">
            <div class="card-body">
                <h5 class="card-title">${item.title.toUpperCase()} ${item.firstName} ${item.lastName}</h5>
                <p class="card-text">Josh now it's time to sleep </p>
            <div onclick="deleteCard(this)" id="${item.id}" class="btn btn-danger">Delete person</div>
            ! why dont i have to invoke the button element in HTML in this case as i an only wrtiting the code in the JS?
                <button type="button" class="btn btn-dark">Edit</button>
            </div>
        </div>
    </div>
    `)
}

// CRUD ->
//  CREATE -> POST
//  READ  -> GET
//  UPDATE  -> PUT / PATCH
//  DELETE -> DELETE

function deleteCard (x){
    console.log(x)

    // console.log('delete done', joy.id)
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "app-id": "644166b299b42468aa4e9a25"
    }
    fetch(`https://dummyapi.io/data/v1/user/${x.id}`, {
        method: "DELETE",
        headers: headersList
    })
        .then((res) => res.json())
        .then((res) => console.log("Delete done"))
        .catch((res) => console.log("this is and error", res))
}





// react way of doing stuffs
// return <div onclick="deleteCard(item.id)">delete click</div>


// return `<div onclick="deleteCard(this)" id="item.id">delete click</div>`

