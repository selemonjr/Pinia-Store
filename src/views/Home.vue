<template>

<div v-if="loading" class="loader">
<h3>Loading Store ...</h3>
</div>
  <div class="home" v-else>
    <div v-for="item in result" :key="item.id" class="items">
    <div>
    <div class="desc">
        <img :src="item.image" alt="">
         <p class="title">{{item.title}}</p>
      <p class="price">Price: ${{Math.floor(item.price)}}</p>
      <button @click="store.addOne(item)" class="add">Add Item</button>
    </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts"> 
import {onMounted,ref} from "vue";
import {useStore} from "../store/counter";
const store = useStore();
const loading = ref(false);
const result = ref([]) as any;
onMounted(async () => {
  loading.value = true;
  const info:any = await fetch("https://fakestoreapi.com/products");
  const json:any = await info.json();
  result.value = json;
  loading.value = false;

})
</script>
<style scoped>
.home {
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}
.desc {
  text-align:center;
}
.add {
  padding:7px 15px;
  background:#000;
  color:#fff;
  border-radius:2px;
  border:none;
}
.add:hover {
  background:#f34c09;
}

.title,.price {
  margin:10px;
}
.items {
  margin:4em;
}
img {
  width:200px;
  height: 200px;
}
.loader {
  text-align:center;
  margin-top:5em;
}
</style>
