<script setup lang="ts">
import BaseSelect from '@/components/base/BaseSelect.vue';
import IconGift from '@/components/icons/IconGift.vue';
import { ref } from 'vue';

const gender = ref('boy');
const age = ref('');
const price = ref('');

const ageOptions = [
    { label: '1-5', value: '1-5' },
    { label: '6-10', value: '6-10' },
    { label: '11-15', value: '11-15' },
];

const priceOptions = [
    { label: '500 Kč', value: '500' },
    { label: '1000 Kč', value: '1000' },
    { label: '2000 Kč', value: '2000' },
];
</script>

<template>
    <section id="search" class="container-center">
        <div>
            <h2 class="font-secondary text-base-black mt-13.25 text-center text-[1.875rem]">
                Vyhledejte dokonalý dárek
            </h2>

            <div class="bg-app-pink-light mt-7 flex items-center rounded-4xl px-10 py-6">
                <div class="flex items-center gap-10">
                    <div class="flex items-center">
                        <input
                            id="boy"
                            v-model="gender"
                            type="radio"
                            name="gender"
                            value="boy"
                            class="sr-only" />
                        <label for="boy" class="flex cursor-pointer items-center gap-10">
                            <span class="flex items-center gap-3">
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                                    :class="gender === 'boy' ? 'bg-base-black' : 'bg-base-grey'">
                                    <span
                                        class="h-2.5 w-2.5 rounded-full bg-white transition-transform duration-200"
                                        :class="gender === 'boy' ? 'scale-100' : 'scale-0'"></span>
                                </span>
                                <span class="font-bold whitespace-nowrap">Pro kluka</span>
                            </span>
                            <img
                                src="@img/search/search-boy.svg"
                                width="63"
                                height="72"
                                alt="Boy" />
                        </label>
                    </div>

                    <div class="flex items-center">
                        <input
                            id="girl"
                            v-model="gender"
                            type="radio"
                            name="gender"
                            value="girl"
                            class="sr-only" />
                        <label for="girl" class="flex cursor-pointer items-center gap-10">
                            <span class="flex items-center gap-3">
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                                    :class="gender === 'girl' ? 'bg-base-black' : 'bg-base-grey'">
                                    <span
                                        class="h-2.5 w-2.5 rounded-full bg-white transition-transform duration-200"
                                        :class="gender === 'girl' ? 'scale-100' : 'scale-0'"></span>
                                </span>
                                <span class="font-bold whitespace-nowrap">Pro holku</span>
                            </span>
                            <img
                                src="@img/search/search-girl.svg"
                                width="74"
                                height="72"
                                alt="Girl" />
                        </label>
                    </div>
                </div>

                <div class="ml-auto flex items-center gap-4 whitespace-nowrap">
                    <BaseSelect v-model="age" :options="ageOptions" placeholder="Věk dítěte" />
                    <BaseSelect v-model="price" :options="priceOptions" placeholder="Max. cena" />

                    <button
                        class="bg-base-black text-base-white flex w-50 items-center justify-center gap-2.5 rounded-2xl px-8 py-4 font-bold transition-opacity duration-200 hover:opacity-90">
                        <IconGift />
                        <span>Vyhledat dárek</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
