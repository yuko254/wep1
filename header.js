let appHeader = `
  <div class="left-corner">
    <img id="laptops-world-img" src="images/laptop-256.png">
    <p id="laptops-world-p">LAPTOPS WORLD</p>
  </div>
  <div class="right-corner">
    <div class="nav-option" id="home-page-icon"><a href="dashboard.html">Dashboard</a></div>
    <div class="nav-option" id="home-page-icon"><a href="HomePage.html">home page</a></div>
    <div class="nav-option" id="products-list-icon"><a href="products-list.html">products</a></div>
    <input class="search-bar" placeholder="Search" type="text">
    <div class="search-icon-container">
      <button class="search-icon"><img class="search-icon-img" src="images/search-13-64.png"></button>
    </div>
    <div class="sign-in"><a id="openModal"><p>Sign in</p></a></div>
    <div class="profile-icon">
      <img src="images/profile-default-pic.png" alt="not found" class="profile-pic">
    </div>
  </div>
`;
document.getElementById("app-header").innerHTML = appHeader;
