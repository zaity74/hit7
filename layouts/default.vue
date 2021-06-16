<template>
  <div class="page_box">
     <div class="navbar flex justify-between ">
          <a href="/"><img class="logo" src="@/assets/image/hit7logonew.png" alt="logo Hit7" /></a>
          <div class="nav_link flex">
            <button type="button" @click="showNav()" :class="{ 'active' : isClick }" id="burger-button" title="Menu">
              <span class="hidden">Toggle menu</span>
              <span class="burger-bar burger-bar--1"></span>
              <span class="burger-bar burger-bar--2"></span>
              <span class="burger-bar burger-bar--3"></span>
          </button>
          <div id="liens_menu" :class="{ 'active' : isOpen }">
            <span><a href="#">A propos</a></span>
            <span><a href="/musique/">Musiques</a></span>
            <span><a href="/Genre/_rap">Kit</a></span>
            <span><a href="/Genre/_rnb">About</a></span>
            <span><a href="/news">Blog</a></span>
            <span class="sing in"><a href="#">Log in</a></span>
            <span class="singout"><a href="#">Sign in</a></span>
          </div>
          </div>
      </div>
    <svg class="forme_wave" xmlns="http://www.w3.org/2000/svg" width="626" height="587" viewBox="0 0 626 587" fill="none">
      <path d="M732 -22H2V414.014C51.6942 442.368 172.864 493.62 259.989 471.793C368.895 444.508 345.143 431.669 438.636 431.669C513.43 431.669 665.376 531.89 732 582V-22Z" stroke="#F3FF6C" stroke-width="4"/>
      <path d="M732 -22H2V414.014C51.6942 442.368 172.864 493.62 259.989 471.793C368.895 444.508 345.143 431.669 438.636 431.669C513.43 431.669 665.376 531.89 732 582V-22Z" stroke="url(#paint0_linear)" stroke-width="4"/>
      <defs>
      <linearGradient id="paint0_linear" x1="1.99999" y1="373.89" x2="701.438" y2="450.977" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9EF5F4"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      </defs>
    </svg>
      <Header />
    <Nuxt />
    <div class="footer">
      footer
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      isClick: false  
    }
  },
  methods: {
    showNav (duration = 500) {
      this.isOpen = !this.isOpen;
      this.isClick = !this.isClick;
    } 
  }
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;700&display=swap');
.page_box{
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1520px;
  width: 100%;
  min-height: 100vh;
  background-color: #F7FFFF ;
  position: relative;
}
 
.header{
  width: 100%;
  height: 550px !important;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  /*align-items: center;*/
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  /*margin-top: 64px;*/
 /* background-image: linear-gradient(to bottom, rgb(196,196,196,0.2), rgba(255, 255, 255, 0.6)),url('~assets/image/headerPicture.jpg');*/
 /* background-image: linear-gradient(to bottom, rgb(196,196,196,0.3), rgba(255, 255, 255, 0.9)), url('~assets/image/rihanna2.jpg');*/
  background-image: url('~assets/image/hi.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  background-size: 100%;
  position: relative;
  z-index: 2;
}
.header .header1{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background-image: linear-gradient(to bottom, rgb(196,196,196,0.1), rgba(247, 255, 255, 0.9));

}
/*.header .white_left_bloc{
  z-index: 4;
  width: 300px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #F7FFFF ;
}*/

/*forme wave */
.forme_wave{
  position: absolute; 
  right: 0;
  z-index: 1;
  margin-top: 140px;
}

/* navabar */
  .navbar{
    max-width: 1520px;
    width: 100%;
    /*background-color: rgb(0, 0, 0);*/
    align-items: center;
    /*position: absolute;*/
    /*top:0;*/
    z-index: 999999999999999;
  }
  .navbar .logo{
      /*padding: 20px;*/
      /*padding-top: 20px; */
      align-self:flex-start;
      width: 80px;
      height: auto;
      margin-left: 150px;
  }
  .navbar h1 a{
      /*padding: 20px;*/
      text-decoration: none;
      font-family: 'Racing Sans One', cursive;
  }
  .navbar .nav_link{
      /*padding: 20px;*/
      margin-right: 8%;
  }

  /* Burger Button */
.hidden {
  visibility: hidden;
}

.nav_link button {
  cursor: pointer;
  align-self: center;
  justify-self: flex-end;
  margin: 20px;

}
/* remove blue outline */
.nav_link button:focus {
    outline: 0;
}

.nav_link #burger-button{
  background-color: white;
  position: relative;
  height: 40px;
  width: 42px;
  z-index: 60;
  border: 0;
  border-radius: 20px;
  pointer-events: all;
  transition: transform .3s cubic-bezier(.165,.84,.44,1);
}

/* trait burger */
.nav_link #burger-button .burger-bar {
    background-color: #E62020;
    position: absolute;
    top: 50%;
    right: 8px;
    left: 8px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .3s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
}
.nav_link #burger-button .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.nav_link #burger-button .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.nav_link #burger-button #burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.nav_link #burger-button .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.nav_link #burger-button .burger-bar--3 {
    transform: translateY(6px);
}

#burger-button.active {
    transform: rotate(-180deg);
}

#burger-button.active .burger-bar--1 {
    transform: rotate(45deg)
}

#burger-button.active .burger-bar--2 {
    opacity: 0;
}

#burger-button.active .burger-bar--3 {
    transform: rotate(-45deg)
}

/* Liens du menu */
#liens_menu span{
  /*padding: 20px;*/
  padding: 15px;
  text-align: center;  
  color: white;
  font-size: 16px;
  transition: 0.4s ease-in-out;
  font-weight: 600;
}
span:hover{
 /* background-image: linear-gradient(to right,rgb(102,222,220,1),rgb(243,255,206,1));*/
 color: red;
}
#liens_menu .singout{
  /*padding: 20px;*/
  background-image: linear-gradient(to right,rgb(102,222,220,80%),rgb(243,255,206,90%));
  border-radius: 8px;
}
.singout:hover{
    background-image: lighten(linear-gradient(to right,rgba(83, 194, 192, 0.8),rgba(245, 253, 221, 0.9)),7%);
}

/* header titre */

.header_title{
  font-family: 'Bebas Neue';
  font-size: 58px;
  text-align: left;
  margin-left: 150px;
  margin-top: 80px;
  line-height: 1.0;
  text-shadow: 1px 2px 7px  rgb(109, 109, 109);
  z-index: 9;
}
/* shape */
.header svg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
}
.header #forme1{
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 12;
}
.header #forme2{
  position: absolute;
  top: 0;
  left: 45px;
  z-index: 12;
}

/* INput */

.header input{
  border: none;
  outline: none;
  color: #d3d3d3;
  font-weight: 600;
  text-transform: uppercase;
}
.search_wrap{
  z-index: 6;
  box-shadow: 1px 2px 4px -4px black ;
}

.search_wrap .search_box{
  position: relative;
}
 .search_wrap .search_box .btn{
    width: 12%;
    height: 100%;
  }

.search_wrap .search_box .btn{
  position: absolute;
  top: 0;
  left: 0;
  border-right: 3px #ffff4f solid;
  cursor: pointer;
  transition: 0.8s ease-in-out;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: white;
}

  .search_wrap .search_box input{
  width: 88%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

}

/* footer */
.footer{
  background-color: black;
  width:100%;
  height: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* media queries */
@media all and (min-width: 830px) and (max-width: 4200px){
  .header{
  /*margin-top: 64px;*/
 /* background-image: linear-gradient(to bottom, rgb(196,196,196,0.2), rgba(255, 255, 255, 0.6)),url('~assets/image/headerPicture.jpg');*/
 /* background-image: linear-gradient(to bottom, rgb(196,196,196,0.3), rgba(255, 255, 255, 0.9)), url('~assets/image/rihanna2.jpg');*/
  background-position-y: -420px;
}

  .navbar h1{
      /*padding: 20px;*/
      padding-left: 90px;
      
  }
    .navbar .nav_link button{
      /*padding: 20px;*/
      visibility: hidden;
  }
    .navbar .nav_link #liens_menu {
      /*padding: 20px;*/
      display: flex;
      align-items: center;
  }
   .navbar .nav_link #liens_menu.active span {
      /*padding: 20px;*/
      
      opacity: 1;
      
  }

  /* INput */
  .search_wrap{
    margin: 40px 150px;
    width: 600px;
    height: 72px;
  }
  .search_wrap .search_box{
    width: 600px;
    height: 72px;
  }
}
@media all and (max-width: 830px){
   .navbar h1{
      /*padding: 20px;*/
      padding-left: 40px;
      
  }
   .navbar .nav_link{
      /*padding: 20px;*/
      margin-right: 8%;
      display: flex; 
      flex-direction: column;
  }
    .navbar .nav_link button{
      /*padding: 20px;*/
      visibility: visible;
  }
    .navbar .nav_link #liens_menu {
      /*padding: 20px;*/
      display: none;
  }
    .navbar .nav_link #liens_menu.active {
      /*padding: 20px;*/
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: black;
      opacity: 0.9;
      transition: all 4s ease-in-out;
      border-bottom: 4px #E62020 solid; 
  }
   .navbar .nav_link #liens_menu.active span {
      /*padding: 20px;*/
      
      opacity: 1;
      
  }
}
</style>
