<template>
  <div class="about">
    <div v-if="store.cartLength > 0">
        <h3></h3>
    </div>
       <div v-else class="empty">
        <h3>Cart is Empty</h3>
    </div>
   <div>
      <div v-for="product in counter" :key="product.id" class="flex">
      <img :src="product.image" alt="">
    <h3 class="item">{{product.title}}</h3>
    <p class="quantity">Item Quantity : {{store.itemQuantity(product)}}</p>
    <button @click="store.remove(product)" class="remove">Remove Item</button>
    </div>
    <div class="totalPrice" v-if="store.totalPrice > 0">
      <h3>Total Price :  ${{Math.floor(store.totalPrice)}}</h3>
    </div>
   </div>
  </div>
</template>
<script setup lang="ts">
import {useStore} from "../store/counter";
import {storeToRefs} from "pinia";
const store = useStore();
const {counter} = storeToRefs(store);
</script>
<style scoped>
.flex {
  padding:8px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:1em;

}
.remove {
  padding:7px 10px;
  background:#e63434;
  border-radius:2px;
  border:none;
  color:#fff;
}
.remove:hover {
  background:#ff0000;
}
.empty {
  text-align:center;
  margin-top:4em;
}
.totalPrice {
  text-align:center;
  margin-top:4em;
}
img {
  width:50px;
  height:50px;
}

@media (max-width:760px) {
  .flex {
    display:block;
  }
  .item {
    margin:10px 0 10px 0;
  }
  .quantity {
    margin:10px 0 10px 0;
    font-weight:700;
  }
  .totalPrice {
  text-align:center;
  margin-bottom:4em;
}
}
</style>
