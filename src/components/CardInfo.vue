<template>
  <h1>Cards fit</h1>
  <article class="container">
    <section class="container__cardFit" v-for="(dato, index) in data" :key="index">
      <img  class="container__cardFit-img" src="@/assets/img/cardnutrition.png" alt="" />
      <div>
        <h3 class="container__cardFit-title">{{ dato.title }}</h3>
        <p class="container__cardFit-text">{{ dato.text }}</p>
      </div>
    </section>
  </article>
</template>



<script setup>

const data = [
  {
    title: "nutrition",
    text: "text1 sadasdasdasdasdasdas asdasdsa sdasdasdasd asdasdassdasdasdas as",
  },
  {
    title: "gym",
    text: "text2 sadasdasdasdasdasdas asdasdsa sdasdasdasd asdasdassdasdasdas as",
  },
  {
    title: "live",
    text: "text3",
  },
  {
    title: "cardio",
    text: "text4",
  },
];
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.container{
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  
  align-items: center;
  gap: 1rem;
  &__cardFit {
    margin: 0 auto;
    border-radius: 1.6rem;
    border: 2px solid $primary-color-1;
    display: flex;
    flex-direction: column;
    max-width: 250px;
    gap: 1rem;
  //   &-img {
  //   width: 8rem;
    
  // }
    &-title{
      font-size: 1.8rem;
      text-align: center;
      font-weight: 700;

    }
    &-text {
      font-size: 1.4rem;
      text-align: center;
      font-weight: 300;
    }
    
   
   
  
  }
 
}
</style>