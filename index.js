// let search = document.getElementById("search");
// a = document.getElementsByTagName("a")
// let filter = document.getElementById("searchValue").value;;
// // document.getElementById("searchValue").addEventListener("change", function () {
// //     filter = document.getElementById("searchValue").value;
// //     console.log(x);
// // })
// function filterFunction() {
//     for (let i = 0; i < a.length; i++) {
//         //let name = search.children[i].text;
//         //console.log(name);
//         txtValue = a[i].innerText || a[i].textContent;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//         } else {
//             a[i].style.display = "none";
//         }
//         // if (searchValue === name) {
//         //     console.log("succcess")
//         //     document.getElementById("demo").innerHTML = "success"
//         // }


//     }
// }
// //console.log(search.children[1].text);
// // console.log(search.len)
let txtValue;
let searchBar = document.getElementById("searchValue");
searchBar.addEventListener("keyup", function (e) {
    console.log(e.target.value)
    const value = e.target.value.toLowerCase();

    let search = document.getElementById("search");
    let array = document.getElementsByTagName("a")

    for (let i = 0; i < array.length; i++) {

        console.log(array[i].text)
        txtValue = array[i].textContent;
        if (txtValue.toLowerCase().indexOf(value) > -1) {
            array[i].style.display = ""

        }
    }
})