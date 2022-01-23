<template>
    <div>
        <nav>
            <div class="nav__logo">
                <router-link to="/"><img src="https://pinia.vuejs.org/logo.svg" alt=""></router-link>
                <h3 class="store"><router-link to="/">Store</router-link></h3>
            </div>
            <div class="nav__cart">
                 <div class="box" v-if="store.cartLength > 0">
                       <p>{{store.cartLength}}</p>
                 </div>
            <h4 class="icon"><router-link to="/about"><i class="fas fa-shopping-cart"></i></router-link></h4>
            </div>
        </nav>
    </div>
</template>
<script setup lang="ts">
import {useStore} from "../store/counter";
const store = useStore();
</script>
<style scoped>
nav {
    width:100%;
    height:10vh;
    background: #eee;
    display:flex;
    padding:10px;
    justify-content:space-between;
    align-items: center;
}
.nav__logo {
    display:flex;
    justify-content:center;
    align-items:center;
}
.box {
  height:17px;
  margin-left:0.3em;
  width:15px;
  text-align:center;
  border-radius:3px;
  background:#ff0000;
  color:#fff;
}
.store {
    margin-top:5px;
}
img {
    width:40px;
    height:40px;
}
.icon {
    font-size:20px;
}
a {
    text-decoration:none;
    color:#000;
}
</style>