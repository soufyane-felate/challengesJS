//challenge 1 :
const p = document.getElementById("text");

    p.innerHTML="hello world";
//challenge 2 :
(function add()
{

let ul = document.getElementById("list");
let li = document.createElement("li");
li.appendChild(document.createTextNode("item1"));
ul.appendChild(li);
}
)()

//challenge 3
const btn=document.getElementById("styleButton");
btn.addEventListener("click",()=>
{
btn.style.backgroundColor="blue";
btn.style.color="white";
}
)
//challenge 4 *
document.querySelectorAll(".alertButton").forEach((button) => {
  button.addEventListener("click", () => alert(button.textContent));
});
//challenge 5 *


const form = document.getElementById("form");
const inputField = document.getElementById("inputField");
const errorm = document.getElementById("error");

function validateForm(event) {
  const inputValue = inputField.value.trim();
  if (inputValue === "") {
    errorm.style.display = "block"; 
    event.preventDefault(); 
  } else {
    errorm.style.display = "none"; 
  }
}

form.addEventListener("submit", function (event) {
  validateForm(event);
});

//challenge 6 :

(function toggle()
{
    const btnTogle = document.getElementById("toggleButton");
    const ToggleDiv = document.getElementById("toggleDiv");
    btnTogle.addEventListener("click",function()
{
    if (ToggleDiv.style.display==="none") {
        ToggleDiv.style.display="block"
    }
    else{
        ToggleDiv.style.display="none";
    }
})
})();

// challenge 7 *:

(function getDate()
{
const time = document.getElementById("time");
const date = new Date();
let y =date.getFullYear();
let month =date.getDate();
let d =date.getDay();
let h =date.getHours();
let m =date.getMinutes();
let s =date.getSeconds();

time.innerHTML=y+"/"+month+"/"+d+" : "+h+":"+m+":"+s;
setTimeout(getDate, 1000);

})();

// challenge 8

(function deleteElement()
{
    const r = document.getElementById("removable");
    const removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", function () {
  r.remove();
});
})();

//challenge 9:

(function changeUrl()
{
    const imageUrl = document.getElementById("image");
    const changeImageButton = document.getElementById("changeImageButton");

    changeImageButton.addEventListener("click", function () {
      imageUrl.src ="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
    });

})();

// chllenge 10 
let count = 0;
document.getElementById("counterButton").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = `Clicks: ${count}`;
});
//11
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.classList.add("hovered");
});
hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.classList.remove("hovered");
});
//12
const dropdown = document.getElementById("dropdown");
const options = ["Option 1", "Option 2", "Option 3"];
options.forEach((option) => {
  const opt = document.createElement("option");
  opt.textContent = option;
  dropdown.appendChild(opt);
});
//13
const rows = document.querySelectorAll("#table tr");
rows.forEach((row) => {
  row.addEventListener("click", function () {
    rows.forEach((r) => (r.style.backgroundColor = ""));
    row.style.backgroundColor = "yellow";
  });
});
//14
const nestedListItems = document.querySelectorAll("#nestedList li");
nestedListItems.forEach((item) => console.log(item.textContent));

//15



document.getElementById("scrollButton").addEventListener("click", function () {
  document
    .getElementById("scrollTarget")
    .scrollIntoView({ behavior: "smooth" });
});
//16
const filterInput = document.getElementById("filterInput");
const filterList = document.getElementById("filterList");
filterInput.addEventListener("input", function () {
  const filter = filterInput.value.toLowerCase();
  Array.from(filterList.children).forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(filter)
      ? ""
      : "none";
  });
});

//17
const dynamicTable = document.getElementById("dynamicTable");
for (let i = 1; i <= 3; i++) {
  const row = dynamicTable.insertRow();
  for (let j = 1; j <= 3; j++) {
    const cell = row.insertCell();
    cell.textContent = `Row ${i} Col ${j}`;
  }
}



