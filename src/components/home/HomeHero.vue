<script setup lang="ts">
import BaseDetailsBadge from '@/components/base/BaseDetailsBadge.vue';
import useEmblaCarousel from 'embla-carousel-vue';
import Autoplay from 'embla-carousel-autoplay';
import { ref, watch } from 'vue';

const promos = [
    { slug: 'geomag', alt: 'Geomag promo' },
    { slug: 'friends', alt: 'Friends promo' },
    { slug: 'club', alt: 'Club promo' },
];

const getImg = (slug: string, ext: string) => {
    return new URL(`../../assets/images/hero/hero-${slug}.${ext}`, import.meta.url).href;
};

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

const selectedIndex = ref(0);
const scrollSnaps = ref<number[]>([]);

const scrollTo = (index: number) => emblaApi.value?.scrollTo(index);

const onSelect = () => {
    if (!emblaApi.value) return;
    selectedIndex.value = emblaApi.value.selectedScrollSnap();
};

const onInit = () => {
    if (!emblaApi.value) return;
    scrollSnaps.value = emblaApi.value.scrollSnapList();
};

watch(emblaApi, (api) => {
    if (!api) return;
    onInit();
    onSelect();
    api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
});
</script>

<template>
    <section
        id="hero"
        class="container-center mt-7 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_31.4375rem]">
        <h1 class="sr-only">Vítejte v Bambule - Království hraček</h1>

        <div class="relative max-h-123.75 min-w-0">
            <div class="embla h-full" ref="emblaRef">
                <div class="embla__container h-full">
                    <div class="embla__slide">
                        <picture class="h-full w-full">
                            <source srcset="@img/hero/hero-mastercard.avif" type="image/avif" />
                            <img
                                class="hero-img h-full w-full rounded-2xl object-cover"
                                src="@img/hero/hero-mastercard.webp"
                                alt="Hero mastercard" />
                        </picture>
                    </div>
                    <div class="embla__slide">
                        <picture class="h-full w-full">
                            <source srcset="@img/hero/hero-holiday-tips.avif" type="image/avif" />
                            <img
                                class="hero-img h-full w-full rounded-2xl object-cover"
                                src="@img/hero/hero-holiday-tips.webp"
                                alt="Holiday tips" />
                        </picture>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    v-for="(_, index) in scrollSnaps"
                    :key="index"
                    @click="scrollTo(index)"
                    :class="[
                        'h-2.5 w-2.5 rounded-full transition-all duration-300',
                        selectedIndex === index ? 'scale-125 bg-white' : 'bg-white/50',
                    ]"></button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:flex xl:flex-col">
            <div
                class="group relative overflow-hidden rounded-2xl"
                v-for="promo in promos"
                :key="promo.slug">
                <picture>
                    <source :srcset="getImg(promo.slug, 'avif')" type="image/avif" />
                    <img
                        class="aspect-2.5/1 w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-105 xl:aspect-auto xl:h-38.5"
                        :src="getImg(promo.slug, 'webp')"
                        :alt="`${promo.alt} promo`" />
                </picture>

                <RouterLink to="/">
                    <BaseDetailsBadge
                        class="transition-all duration-300 ease-in-out group-hover:brightness-110" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.embla {
    overflow: hidden;
    border-radius: 1rem;
}

.embla__container {
    display: flex;
    margin-left: -1rem;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    margin-left: 1rem;
}

.hero-img {
    height: 30.9375rem;
}

@media (max-width: 80rem) {
    .hero-img {
        height: auto;
        aspect-ratio: 16 / 9;
    }
}
</style>
