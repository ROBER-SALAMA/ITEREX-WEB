<template>
    <div>
        <sideBar v-slot:blog>
            <section
                class="h-auto relative bg-[url(https://firebasestorage.googleapis.com/v0/b/iterex-1a035.appspot.com/o/iterex.webp?alt=media&token=e615526e-25b4-4d20-9efc-19b534071b20)] bg-cover bg-center bg-no-repeat">
                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <span class="text-3xl font-extrabold sm:text-5xl text-white">
                            “Convergencia hacia el éxito, juntos somos imparables."
                        </span>
                    </div>
                </div>
            </section>
        </sideBar>
    </div>
</template>

<script setup lang="ts">
import sideBar from "../global/sideBar.vue";
</script>

<style lang="scss" scoped></style>
