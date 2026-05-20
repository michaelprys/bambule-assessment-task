<script setup lang="ts">
const model = defineModel<boolean>({ default: false });

const close = () => {
    model.value = false;
};
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div
                v-if="model"
                class="fixed inset-0 z-100 flex flex-col gap-6 bg-white p-6 pt-20 lg:hidden">
                <button @click="close" class="absolute top-5 right-5 text-4xl">&times;</button>

                <nav @click="close" class="flex flex-col gap-6">
                    <RouterLink class="text-xl underline" to="/">Prodejny</RouterLink>
                    <RouterLink class="text-xl underline" to="/">Testováno dětmi</RouterLink>
                    <RouterLink class="text-xl underline" to="/">Klub Království hraček</RouterLink>
                    <RouterLink class="text-xl underline" to="/">Kontakt</RouterLink>
                </nav>
            </div>
        </Transition>
    </Teleport>
</template>
