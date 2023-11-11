<template>
  <div v-if="showSideModal" class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[90] overflow-x-auto" />

  <div :class="(showSideModal ? 'translate-x-0' : 'translate-x-full') + ' ' + size"
    class="top-0 bg-white right-0 w-[30vw] h-[95vh] mt-[2.5vh] rounded-l-2xl dark:bg-white flex flex-col p-10 text-gray-700 fixed z-[100] ease-in-out duration-300">
    <div class="grid w-full grid-cols-2">
      <p class="text-2xl font-semibold text">{{ title }}</p>
      <div class="flex justify-end">
        <button @click="emits('SetShowSideModal')">
          <font-awesome-icon icon="x" class="2.0" />
        </button>
      </div>
    </div>
    <div class="w-full mt-4">
      <slot />
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { FontAwesomeIcon } from "../plugin/font-awesome";
type Emits = {
  (Event: "SetShowSideModal"): void;
};

const emits = defineEmits<Emits>();

const { showSideModal, title } = defineProps<{
  showSideModal: boolean;
  title: string;
  size?: string;
}>();

</script>

