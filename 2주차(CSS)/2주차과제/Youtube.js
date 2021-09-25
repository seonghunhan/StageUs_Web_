/* Set the width of the side navigation to 250px */
function openNav() {

    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("Gridcontainer").style.opacity = "0.5";
    document.getElementById("container").style.opacity = "0.5";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {

    document.getElementById("sidebar").style.left = "-270px";
    document.getElementById("Gridcontainer").style.opacity = "1";
    document.getElementById("container").style.opacity = "1";
  }