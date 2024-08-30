// getting HTML elements 
let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#ul");



//creating a function on click to get value of input in li

input.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    if (input.value != "") {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = `${input.value} <i id='john' onclick="edit(this)" class="fa-solid fa-eraser"></i><i  id='motu'class="fa-solid fa-xmark"></i>`;
      input.value = "";
      //here you can delete you items .
      li.querySelector("#motu").addEventListener("click", () => {  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            li.remove()  
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted.",
              icon: "success"
            });
          }
        })
      })

    }
    else {
      alert("please fill input field");
    }
  }
});





//creating a function you can edit with .
function edit(data) {
  let ull = data.parentElement;
  let a = prompt("Edit your value", ull.firstChild.nodeValue);
  if (a == "") {
    ul.remove();
  } if (a != null) {
    ull.firstChild.nodeValue = a;
  }
}

btn.addEventListener("click", () => {
  if (input.value != "") {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${input.value} <i id='john' onclick="edit(this)" class="fa-solid fa-eraser "></i><i id='motu' class="fa-solid fa-xmark "></i>`;
    input.value = "";
    //here you can delete you items .

  } else {
    alert("please fill input field");
  }
  li.querySelector("#motu").addEventListener("click", () => {  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        li.remove()
        Swal.fire({
          title: "Deleted!",
          text: "Item has been deleted.",
          icon: "success"
        });
      }
    })
  })

}) 