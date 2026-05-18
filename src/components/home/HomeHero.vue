<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue';
import { ref, watch } from 'vue';

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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
        <div class="relative min-w-0 flex-1">
            <div class="embla" ref="emblaRef">
                <div class="embla__container">
                    <div class="embla__slide">
                        <picture>
                            <source srcset="@img/hero/hero-mastercard.avif" type="image/avif" />
                            <img
                                class="hero-img rounded-2xl"
                                src="@img/hero/hero-mastercard.webp"
                                alt="Mastercard" />
                        </picture>
                    </div>
                    <div class="embla__slide">
                        <picture>
                            <source srcset="@img/hero/hero-holiday-tips.avif" type="image/avif" />
                            <img
                                class="hero-img rounded-2xl"
                                src="@img/hero/hero-holiday-tips.webp"
                                alt="Holiday Tips" />
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
            <img
                class="h-38.5 w-125.75 rounded-2xl object-cover"
                src="@img/hero/hero-geomag.webp"
                alt="Geomag" />
            <img
                class="h-38.5 w-125.75 rounded-2xl object-cover"
                src="@img/hero/hero-friends.webp"
                alt="Friends" />
            <img
                class="h-38.5 w-125.75 rounded-2xl object-cover"
                src="@img/hero/hero-club.webp"
                alt="Club" />
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
    gap: 1.5rem;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}

.hero-img {
    width: 100%;
    height: 30.9375rem;
    object-fit: cover;
    display: block;
}
</style>
