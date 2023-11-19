<template>
    <div class="antialiased bg-white borde">
      <header class="lg:px-16 px-6 bg-c flex flex-wrap items-center lg:py-0 py-2">
        <button
        @click="
          showModal = true;
          modalType = 'view';
        "
        class="flex items-center font-semibold py-2 px-4 m-4"
        
        @mouseover="isRolHovered = true"
        @mouseleave="isRolHovered = false"
      >
      <font-awesome-icon class="w-8 h-8" icon="fa-solid fa-bars" style="color: #cc2e2e;" />
      </button>
      <SideMenu 
      :show-side-modal="showModal"
      @set-show-side-modal="showModal = !showModal"
      title="iterex"
      :size="'w-[27%]'"
    >

    <!-- 1- Dropwodn menu -->
    <button 
        type="button" 
        class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700" 
        aria-controls="dropdown-example" 
        :aria-expanded="!!isDropdownOpen"
        @click="toggleDropdown"
      >
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Becas</span>
        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <!-- Dropdown Content -->
      <ul v-show="isDropdownOpen" id="dropdown-example" class="py-2 space-y-2">
        <li>
          <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:tex-black dark:hover:bg-gray-700 pl-11">Internas</a>
        </li>
        <li>
          <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 pl-11">Externas</a>
        </li>
      </ul>

      <!-- 2- Dropwodn menu -->

      <button 
        type="button" 
        class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700" 
        aria-controls="dropdown-example" 
        :aria-expanded="!!isDropdownOpen"
        @click="SecondDropdown"
      >
      <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
        </svg>
        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Programas</span>
        <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <!-- Dropdown Content -->
      <ul v-show="isDropdownOpen" id="dropdown-example" class="py-2 space-y-2">
        <li>
          <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:tex-black dark:hover:bg-gray-700 pl-11">Occidente</a>
        </li>
        <li>
          <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 pl-11">Centro</a>
        </li>
        <li>
          <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-black dark:hover:bg-gray-700 pl-11">Oriente</a>
        </li>
      </ul>
    </SideMenu>
        <div class="flex-1 flex  items-center">
          <a href="#">
            <img src="https://firebasestorage.googleapis.com/v0/b/iterex-5de03.appspot.com/o/ItterEx%20LOGO.png?alt=media&token=b4ee8a5f-7a58-46d3-a338-744b5d1c5e13" alt="logo-iterex"
            width="60px" height="60px"
            >
          </a>
          <span class="m-4 font-bold text-lg" 
          style="font-family: 'Montserrat', sans-serif;">ITEREX</span>
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
    <!-- component blog -->
    <div class="bg-yellow-300 flex items-center overflow-hidden">
      <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 mx-auto">
        <div class="md:flex items-center">
          <div class="w-full">
            <div class="">

              <slot name="blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script lang="ts" setup>
import { FontAwesomeIcon } from '../../plugin/font-awesome';
import SideMenu from '../global/SideMenu.vue';
import { ref } from 'vue';

const showModal = ref(false);
const modalType = ref("");
const isRolHovered = ref(false);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  console.log('Dropdown is open:', isDropdownOpen.value);
};

const SecondDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  console.log('Dropdown is open:', isDropdownOpen.value);
};

</script>
  <style lang="scss" scoped>#menu-toggle:checked+#menu {
    display: block;
  }

  </style>