<script setup lang="ts"></script>
<template>
    <section id="hero" class="container-center mt-7.25 flex gap-6">
        <picture>
            <source srcset="@img/hero/hero-mastercard.avif" type="image/avif" />
            <img
                class="object-cover"
                width="881"
                height="495"
                src="@img/hero/hero-mastercard.webp"
                loading="lazy"
                alt="Mastercard logo" />
        </picture>

        <div class="flex flex-col gap-4">
            <picture>
                <source srcset="@img/hero/hero-geomag.avif" type="image/avif" />
                <img
                    src="@img/hero/hero-geomag.webp"
                    width="503"
                    height="154"
                    loading="lazy"
                    alt="Geomag promo" />
            </picture>
            <picture>
                <source srcset="@img/hero/hero-friends.avif" type="image/avif" />
                <img
                    src="@img/hero/hero-friends.webp"
                    width="503"
                    height="154"
                    loading="lazy"
                    alt="Friends promo" />
            </picture>
            <picture>
                <source srcset="@img/hero/hero-club.avif" type="image/avif" />
                <img
                    src="@img/hero/hero-club.webp"
                    width="503"
                    height="154"
                    loading="lazy"
                    alt="Club promo" />
            </picture>
        </div>
    </section>
</template>
