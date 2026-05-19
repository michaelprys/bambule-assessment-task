<script setup lang="ts">
import BaseButtonSecondary from '@/components/base/BaseButtonSecondary.vue';
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

            <div
                class="mt-7 flex items-center rounded-4xl p-13.25 shadow-[0px_1px_32px_rgba(139,151,166,0.2)]">
                <div class="flex items-center gap-6">
                    <div class="bg-base-grey-light flex h-13 w-55 items-center rounded-2xl pl-4">
                        <input
                            id="boy"
                            v-model="gender"
                            type="radio"
                            name="gender"
                            value="boy"
                            class="sr-only" />
                        <label for="boy" class="flex cursor-pointer items-center">
                            <span class="flex items-center gap-3">
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                                    :class="
                                        gender === 'boy' ? 'bg-base-grey' : 'bg-base-grey-light'
                                    ">
                                    <span
                                        class="bg-base-white h-2.5 w-2.5 rounded-full transition-transform duration-200"
                                        :class="gender === 'boy' ? 'scale-100' : 'scale-0'"></span>
                                </span>
                                <span class="font-bold whitespace-nowrap">Pro kluka</span>
                            </span>
                            <img
                                class="ml-15"
                                src="@img/search/search-boy.svg"
                                width="63"
                                height="72"
                                alt="Boy" />
                        </label>
                    </div>

                    <div class="bg-base-grey-light flex h-13 w-49.75 items-center rounded-2xl pl-4">
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
                                    :class="gender === 'girl' ? 'bg-base-grey' : 'bg-base-grey'">
                                    <span
                                        class="bg-base-white h-2.5 w-2.5 rounded-full transition-transform duration-200"
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
                    <BaseSelect
                        class="bg-base-grey-light h-13 rounded-2xl"
                        v-model="age"
                        :options="ageOptions"
                        placeholder="Věk dítěte" />
                    <BaseSelect
                        class="bg-base-grey-light h-13 rounded-2xl"
                        v-model="price"
                        :options="priceOptions"
                        placeholder="Max. cena" />

                    <BaseButtonSecondary class="flex h-13 w-50 gap-2.5 px-[2.15625em] py-5.25">
                        <template #icon>
                            <IconGift />
                        </template>

                        <span>Vyhledat dárek</span>
                    </BaseButtonSecondary>
                </div>
            </div>
        </div>
    </section>
</template>
