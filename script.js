// SIDEBAR TOGGLE

const divContainer = document.querySelector('#elementTogglebutton');

let showOrHide =()=>{
  divContainer.style.display = 'block'
}

// function showOrHide(){
//   divContainer.style.display = 'block'
// }

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}