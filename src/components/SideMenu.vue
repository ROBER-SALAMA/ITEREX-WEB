<template>
  <div v-if="showSideModal" class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] z-[90] overflow-y-auto" />

  <div :class="(showSideModal ? 'translate-y-0' : 'translate-y-full') + ' ' + size"
    class="top-0 bg-white left-0 w-[30vw] h-[100vh] mt-[0] rounded-xl dark:bg-white flex flex-col p-10 text-gray-700 fixed z-[100] ease-in-out duration-0">
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

