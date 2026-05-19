<script setup lang="ts">
import ArticleCard from '@/components/home/articles/ArticleCard.vue';
import IconArrow from '@/components/icons/IconArrow.vue';

const articles = [
    {
        id: 1,
        badge: 'Odborný článek',
        badgeColor: 'purple',
        title: 'Odměňování za vysvědčení?',
        text: 'O tom, jak zvládnout stres jsme psali minule. Dnes se podíváme na téma odměn za „vysvědčení“. Záměrně jej dávám do uvozovek, protože...',
        alt: 'Odměňování za vysvědčení',
    },
    {
        id: 2,
        badge: 'Akce',
        badgeColor: 'darkblue',
        title: 'O Kapku lepší Bambule se vrací již pošesté',
        text: 'Nadační fond Kapka naděje a hračkářství Bambule společně opět pomáhají! Přispějte s námi na dobrou věc a pošlete Medvídky naděje...',
        alt: 'O Kapku lepší Bambule',
    },
    {
        id: 3,
        badge: 'Odborný článek',
        badgeColor: 'purple',
        title: 'Interaktivní hračky',
        text: 'Rodiče mohou v dnešní době vybírat ze skutečně pestré nabídky různých podnětů pro děti prakticky od narození. Hračky obvykle stimulují sluch...',
        alt: 'Interaktivní hračky',
    },
];
</script>

<template>
    <section id="articles" class="container-center mt-20">
        <div class="flex w-full items-center justify-between">
            <h2 class="font-secondary text-3xl">Bambule radí</h2>

            <RouterLink class="flex items-center gap-2 underline" to="/">
                Zobrazit vše
                <IconArrow class="-rotate-90" width="10" height="6" />
            </RouterLink>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
            <ArticleCard v-for="article in articles" :key="article.id" v-bind="article" />
        </div>
    </section>
</template>
