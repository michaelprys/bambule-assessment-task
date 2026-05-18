<script setup lang="ts">
import IconCart from '@/components/icons/IconCart.vue';
import IconClub from '@/components/icons/IconClub.vue';
import IconStore from '@/components/icons/IconStore.vue';
</script>

<template>
    <nav class="ml-9.5 shrink-0">
        <ul class="flex items-center gap-8 whitespace-nowrap">
            <li>
                <RouterLink class="flex items-center gap-3.25" to="/">
                    <IconStore class="" />
                    <span class="underline">Prodejny</span>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <span class="underline">Testováno dětmi</span>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <span class="underline">Klub Království hraček</span>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <span class="underline">Kontakt</span>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <IconClub />
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/">
                    <IconCart />
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
