<template>
    <section id="not-found" class="grid min-h-svh place-items-center px-6 py-20 text-center">
        <div class="relative z-10">
            <div class="flex justify-center">
                <img src="@img/base/logo.svg" width="218" height="70" alt="Bambule logo" />
            </div>

            <div class="mt-5">
                <h2 class="text-base-black text-3xl lg:text-4xl">Stránka nenalezena</h2>

                <p class="text-base-grey mx-auto mt-4 max-w-md text-base lg:text-lg">
                    Je nám líto, ale požadovaná stránka neexistuje. Zkuste se vrátit na úvodní
                    stranu a pokračovat v nákupu.
                </p>

                <RouterLink
                    to="/"
                    class="bg-base-black hover:bg-base-black/90 text-base-white mt-10 inline-block rounded-xl px-10 py-4 shadow-lg shadow-black/10 transition-all">
                    Zpět na hlavní stranu
                </RouterLink>
            </div>
        </div>
    </section>
</template>
