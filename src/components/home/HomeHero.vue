<script setup lang="ts">
import BaseDetailsBadge from '@/components/base/BaseDetailsBadge.vue';
import useEmblaCarousel from 'embla-carousel-vue';
import { ref, watch } from 'vue';

const promos = [
    {
        slug: 'geomag',
        alt: 'Geomag promo',
    },
    {
        slug: 'friends',
        alt: 'Friends promo',
    },
    {
        slug: 'club',
        alt: 'Club promo',
    },
];

const getImg = (slug: string, ext: string) => {
    return new URL(`../../assets/images/hero/hero-${slug}.${ext}`, import.meta.url).href;
};

// const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
    <section id="hero" class="container-center mt-7.25 flex">
        <h1 class="sr-only">Vítejte v Bambule - Království hraček</h1>

        <div class="relative min-w-0 flex-1">
            <div class="embla" ref="emblaRef">
                <div class="embla__container">
                    <div class="embla__slide">
                        <picture>
                            <source srcset="@img/hero/hero-mastercard.avif" type="image/avif" />
                            <img
                                class="hero-img rounded-2xl"
                                src="@img/hero/hero-mastercard.webp"
                                alt="Hero mastercard" />
                        </picture>
                    </div>
                    <div class="embla__slide">
                        <picture>
                            <source srcset="@img/hero/hero-holiday-tips.avif" type="image/avif" />
                            <img
                                class="hero-img rounded-2xl"
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
                        'h-2.5 w-2.5 rounded-full transition-all',
                        selectedIndex === index ? 'scale-125 bg-white' : 'bg-white/50',
                    ]"></button>
            </div>
        </div>

        <div class="ml-4 flex flex-col gap-4">
            <div class="relative" v-for="promo in promos" :key="promo.slug">
                <picture>
                    <source :srcset="getImg(promo.slug, 'avif')" type="image/avif" />
                    <img
                        class="h-38.5 w-125.75 rounded-2xl object-cover"
                        :src="getImg(promo.slug, 'webp')"
                        width="1006"
                        height="308"
                        :alt="`${promo.alt} promo`" />
                </picture>

                <RouterLink to="/">
                    <BaseDetailsBadge />
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
    margin-left: -1.5rem;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    padding-left: 1.5rem;
}

.hero-img {
    width: 100%;
    height: 30.9375rem;
    object-fit: cover;
    display: block;
}
</style>
