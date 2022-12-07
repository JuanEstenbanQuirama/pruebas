<template>
  <!-- <h1>{{ $route.name }}</h1> -->
  <!-- <button @click="$router.push({ path: '/' })">Home</button>
  <button @click="$router.push({ path: '/shop' })">Shop</button>
  <button @click="$router.back()">atras</button> -->
  <header class="header">
    <div class="header__view">
      <div class="header__toggle">
        <img
          class="header__toggle-icon"
          @click="open = !open"
          src="../assets/img/menu-hamburguesa.png"
          alt=""
        />
      </div>
      <div class="header__user">
        <img
          src="../assets/img/usuario.png"
          alt=""
          @click="$router.push({ path: '/login' })"
        />
      </div>
    </div>
    <nav class="header__navbar" :class="open ? 'active-menu' : ''">
      <div
        v-for="(route, index) in routes"
        :key="index"
        class="header__navbar-item"
        @click="$router.push({ path: route.route })"
        :class="$route.path == route.route ? 'active' : ''"
      >
        <p class="header__navbar-item-text">{{ route.name }}</p>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const open = ref(false);
const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Membreships",
    route: "/membreships",
  },
  {
    name: "Suplements",
    route: "/suplements",
  },
  {
    name: "Sportwear",
    route: "/sportwear",
  },
  {
    name: "Login",
    route: "/login",
  },
];
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.header {
  &__view {
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    @media (min-width: 768px) {
      display: none;
    }
  }
  &__navbar {
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translateY(-200%);
    transition: all 0.6s;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid tomato;
    background-color: $primary-color-2;
    &-item {
      padding: 0.8rem;
      cursor: pointer;
      &:hover {
        color: $primary-color-1;
        transition: 0.3s;
      }
    }
  }
  img {
    width: 35px;
    filter: invert(0);
    cursor: pointer;
    

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      transform: translateY(0);
    }
  }
}

.active-menu {
  position: absolute;
  transform: translate(0);
  transition: all 0.5s;
}

.active {
  border: 1px solid $primary-color-1;
  border-radius: 10px;
  transition: 0.5s;
}
</style>