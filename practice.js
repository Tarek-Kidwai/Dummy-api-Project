function fetchdata() {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "app-id": "644166b299b42468aa4e9a25"
    }
    fetch("https://dummyapi.io/data/v1/user", {
        method: "GET",
        header: headersList
    })
        .then((res) => res.json)
        .then((res) => console.log(res))
        .catch((res) => console.log(err))
}

fetchdata();


function fetchdata (){
    let headersList ={


    }
  
    fetch (""{

        method : "GET",
        header : headersList
    })

    function printCard (){
        console.log(res.data)
        res.data.map()
    }



}

function deleteCard (btn){
    console.log("delete this",btn.id)
    let headersList ={
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "app-id": "644166b299b42468aa4e9a25"


    }
}

fetch (`https://dummyapi.io/data/v1/user/${btn.id}`{
method : "delete",
header: headersList})


.then((res)=>res.json())
.then((res)=>console.log("delete done"))
.catch((res)=>console.log("this not deleted"))


function deleteCard(x){
    console.log("delete this",x.id)
let headersList = {

}    

fetch (`,${x.id}`{
    method: delete,
    header: headersList
})

.then((res)=>res.json())
.then((res)=>console.log("delete is done"))
.catch((res)=>console.log("this is an error",res))
}

onclick ="deleteCard"(this)  id ="${item.id}"

function deleteCard (x){
    console.log("delete this",x.id)
    let headersList ={

    }

    fetch (`${x.id}`{
        method: delete,
        
    })
}