<template>
     <div class="home">

        <button> hola</button>

</div>
    <h1>hi home</h1>
    <CardInfo />
    <Categories/>
    <Advertising/>
    <ClassSchedule/>
    <Memberships/>
    <ContactUs/>
    <Footer/>
</template>

<script setup>
import CardInfo from "@/components/CardInfo.vue";
import Categories from "@/components/Categories.vue";
import Advertising from "@/components/Advertising.vue";
import ClassSchedule from "@/components/ClassSchedule.vue";
import Memberships from "@/components/Memberships.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";


</script>

<style lang="scss" scoped>

.home {
    background-image: url("../../assets/img/home.jpg") ;
    min-height: 100vh;
   height: 100%;
}






    
</style>

