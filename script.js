function myFunction() {
    var x = document.getElementById("dropdown-id");
    if (x.className === "dropdown-navbar") {
      x.className += " responsive";
    } else {
      x.className = "dropdown-navbar";
    }
  }