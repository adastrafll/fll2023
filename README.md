<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="yes.css"> 
       
    <!-- ===== Boxicons CSS ===== -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>


     <title>HobbyBazaar</title>
</head>
<body>
   
    <nav>
        <div class="nav-bar">
            <i class='bx bx-menu sidebarOpen' ></i>
            <span class="logo navLogo"><a href="#">HobbyBazaar</a></span>


            <div class="menu">
                <div class="logo-toggle">
                    <span class="logo"><a href="#">HobbyBazaar</a></span>
                    <i class='bx bx-x siderbarClose'></i>
                </div>


                <ul class="nav-links">
                    <li><a href="#">My Groups</a></li>
                    <li><a href="#">My Projects</a></li>
                    <li><a href="#">Hobby of the Week</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>


            <div class="darkLight-searchBox">
                <div class="dark-light">
                    <i class='bx bx-moon moon'></i>
                    <i class='bx bx-sun sun'></i>
                   
                </div>


                <div class="searchBox">
                   <div class="searchToggle">
                    <i class='bx bx-x cancel'></i>
                    <i class='bx bx-search search'></i>
                   </div>

                   


                    <div class="search-field">
                        <input type="text" placeholder="Search...">
                        <i class='bx bx-search'></i>
                    </div>
                </div>
            </div>
                    <div class="profile-icon">
                      <div class="profile">
                      <i class="fa-regular fa-user"></i>
                    </div>
                   </div>
            

        </div>
        <script>


            const body = document.querySelector("body"),
                  nav = document.querySelector("nav"),
                  modeToggle = document.querySelector(".dark-light"),
                  searchToggle = document.querySelector(".searchToggle"),
                  sidebarOpen = document.querySelector(".sidebarOpen"),
                  siderbarClose = document.querySelector(".siderbarClose");
           
                  let getMode = localStorage.getItem("mode");
                      if(getMode && getMode === "dark-mode"){
                        body.classList.add("dark");
                      }
           
            // js code to toggle dark and light mode
                  modeToggle.addEventListener("click" , () =>{
                    modeToggle.classList.toggle("active");
                    body.classList.toggle("dark");
           
                    // js code to keep user selected mode even page refresh or file reopen
                    if(!body.classList.contains("dark")){
                        localStorage.setItem("mode" , "light-mode");
                    }else{
                        localStorage.setItem("mode" , "dark-mode");
                    }
                  });
           
            // js code to toggle search box
                    searchToggle.addEventListener("click" , () =>{
                    searchToggle.classList.toggle("active");
                  });
             
                 
            //   js code to toggle sidebar
            sidebarOpen.addEventListener("click" , () =>{
                nav.classList.add("active");
            });
           
            body.addEventListener("click" , e =>{
                let clickedElm = e.target;
           
                if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
                    nav.classList.remove("active");
                }
            });
           
            </script>
        <div style="color: black;" >
            <h1 style="padding-top: 4%;
            padding-left: 0.3cm;
            color: darkmagenta; text-decoration: underline;">Recent activity</h1>
        </div>
        <a href="Screenshot 2023-11-24 100202.png"><img src="Screenshot 2023-11-24 100202.png" style="height: 3cm; padding-left: 8.1cm;"></a>
        <h2 style="padding-left: 7cm; color: blueviolet;"><a href="FLLMATIONXD.html ">FLLANIMATIONS XD</a></h2>
    </nav> 
   

  








</body>
</html>

