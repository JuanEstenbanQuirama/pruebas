<template>
    <h3>hi categories</h3>
    <article class="categories">
        <section class="categories__card" v-for="(dato, index) in dataCategories" :key="index">
            <img src="@/assets/img/cardnutrition.png" alt="">
            <h2 class="categories__card-title">{{dato.categorie}}</h2>
        </section>

    </article>
</template>

<script setup>
const dataCategories = [
    {
        categorie: 'hit'

    },
    {
        categorie: 'power'

    },
    {
        categorie: 'salsa'

    },
    {
        categorie: 'cardio'

    },
    {
        categorie: 'dance'

    },
]
</script>

<style lang="scss">
.categories {
    border: 1px solid tomato;
    display: flex;

   
    
}
    
</style>