<template>
    <header>
        <div class="header">
            <div v-on:click="goTo('home')" class="logo">
                <h4 class="sweet">Sweet Dishes</h4>
                <img src="../../assets/breakfast.png" width="45px" height="45px" style="margin-left: 10px; background-color: lightgray;">
            </div>
            <div v-on:click="goTo('cart')" class="d-flex cart">
                <span class="material-symbols-outlined">shopping_cart</span>
                <!-- <i class="material-symbols-outlined cart-icon"></i> -->
                <span class="cart-count">{{ count }}</span>

                <h5 class="login">Login</h5> 
                <h5 class="register">Sign Up</h5>
            </div>
        </div>
    </header>
</template>

<script>
import router from '@/router/router';

    export default {
        name: "Header",
        computed:{
            count(){
                return this.$store.state.cartItemCount;
            }
        },
        methods:{
            goTo(page){
                switch(page){
                    case "home":
                        router.push("/")
                        break;
                    case "cart":
                        router.push("cart")
                        break;
                    default:
                        alert("Invalid page access")
                        break;
                }
            }
        }
    };
</script>

<style scoped>
.header {
    height: 60px;
    background: lightgrey;
    display: flex;
    justify-content: space-between;
}
.logo {
    display: flex;
    margin-left: 15px;
    padding: 6px;
    cursor: pointer;
}
.sweet {
    color: deeppink; 
    font-weight: 600; 
    margin-top: 7px;
}
.cart-count {
    font-size: 15px;
    color: #d4570cf2;
    padding: 0 5px;
    margin-left: -35px; 
    background: white;
    height: 20px;
    border-radius: 50%;
    width: 20px;
}
.cart{
    width: 300px; 
    justify-content:space-evenly; 
    padding-top: 3px
}
.cart-icon {
line-height: 45px; 
font-size: 24px; 
color: #2aa5a0;
cursor: pointer;
}
.login,
.register{
    font-weight: 600;
    margin-top: 6px;
}
.material-symbols-outlined { 
    display: flex;
  align-items: center;
    font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>