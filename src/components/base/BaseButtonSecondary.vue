<template>
    <button
        class="bg-base-black text-base-white flex items-center justify-center rounded-2xl font-bold transition-opacity duration-200 hover:opacity-90">
        <slot name="icon" />

        <span><slot /></span>
    </button>
</template>
