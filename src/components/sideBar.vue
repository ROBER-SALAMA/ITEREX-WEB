<template>
    <div class="antialiased bg-white borde">
      <header class="lg:px-16 px-6 bg-c flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
          <a href="#">
            <img src="https://firebasestorage.googleapis.com/v0/b/iterex-5de03.appspot.com/o/ItterEx%20LOGO.png?alt=media&token=b4ee8a5f-7a58-46d3-a338-744b5d1c5e13" alt=""
            width="60px" height="60px"
            >
          </a>
        </div>
        <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current #31241E"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
  
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav  class="">
            <ul class="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
              <li><RouterLink to="/" style="font-family: 'Montserrat', sans-serif; font-weight: bold;"  class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-red-500 hover:text-red-500" href="#">Inicio</RouterLink></li>
              <li><RouterLink to="/about" style="font-family: 'Montserrat', sans-serif; font-weight: bold;" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-red-500 hover:text-red-500" href="#">Historia</RouterLink></li>
              <li><RouterLink to="/contact" style="font-family: 'Montserrat', sans-serif; font-weight: bold;" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-red-500 hover:text-red-500" href="#">Vision</RouterLink></li>
              <li><RouterLink to="/contact" style="font-family: 'Montserrat', sans-serif; font-weight: bold;" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-red-500 hover:text-red-500" href="#">Mision</RouterLink></li>
              <li><RouterLink to="/contact" style="font-family: 'Montserrat', sans-serif; font-weight: bold;" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-red-500 hover:text-red-500" href="#">Contacto</RouterLink></li>

            </ul>
          </nav>
        </div>
  
      </header>
      <hr style="color: black;">
      
  
  </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  <style lang="scss" scoped>#menu-toggle:checked+#menu {
    display: block;
  }

  </style>