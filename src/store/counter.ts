import {defineStore} from "pinia";
import { useStorage } from '@vueuse/core';
export const useStore = defineStore("main",{
    state:() => ({
        counter:useStorage('counter', []) as any,
    }),
    actions: {
        addOne(item:any) {
            const items:any = this.counter.find((i: any) => i.id === item.id)
            if(items) {
                items.quantity++
            } else {
                this.counter.push({...item, quantity:1})
            }
           
        },
        remove(product:any) {
            const items:any = this.counter.find((i:any) => i.id === product.id);
            if(items) {
                if(items.quantity > 1) {
                    items.quantity--
                } else {
                    this.counter = this.counter.filter((i:any) => i.id !== product.id)
                }
            }
           
        },
    },
    getters: {
        itemQuantity:(state:any) => (product:any) =>{
            const items:any = state.counter.find((i: any) => i.id === product.id);
            return items.quantity;
        },
        cartLength:(state:any) => {
            return state.counter.length;
        },
        totalPrice(state):any {
            return state.counter.reduce((val:number,item:any) => val + item.quantity * item.price,0)
        }

    }
});