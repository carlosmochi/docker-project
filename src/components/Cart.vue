<template>
    <div class="d-flex cart-outer">
        <Header />
        <div class="cart-body">
            <div v-if="totalPrice > 0" class="container mb-5">
                <h4 class="my-4 my-cart">My Cart</h4> 
                <div class="d-flex my-3" style="justify-content: space-between;">
                    <h4 class="fw-600">Summary</h4>
                    <h4 class="fw-600" style="margin-right: 49%; ">Cart</h4> 
                </div>
                <div class="d-flex">
                    <Summary v-bind:totalPrice="totalPrice" />
                    <div class="row" style="width:100%"> 
                        <div style="max-width: 70%" class="col-md-12"> 
                            <ul style="padding: 0">
                                <li v-for="item in cartItems" :key="item.id" style="list-style: none;"> 
                                    <div class="cart-items">
                                        <img :src="item.url" width="50px" height="50px" style="border-radius: 50%" /> 
                                        <h6 class="mt-15">{{ item.name }}</h6> 
                                        <div class="d-flex mt-10">
                                            <button v-on:click="addItem(item)" class="add" type="button">+</button> 
                                            <span class="cart-quantity">{{ item.quantity }}</span> 
                                            <button v-on:click="removeItem(item)" class="remove" type="button">-</button>
                                        </div>
                                        <h6 class="mt-15">R$ {{ item.price *  item.quantity }}</h6> 
                                    </div> 
                                    <div class="line"></div>
                                </li> 
                            </ul> 
                        </div> 
                    </div>
                </div>
                <div class="d-flex justify-content-end" style="width: 80%; margin-top: 2%"> 
                    <button v-on:click="checkout" class="btn btn-primary" type="button">Checkout</button>
                </div>
            </div>
            <EmptyCart v-else />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "./layout/Header"
    import Footer from "./layout/Footer"
    import EmptyCart from "./EmptyCart"
    import Summary from "./Summary"
    import swal from "sweetalert"

    export default{
        name: "Cart",
        components:{
            Header,
            Footer,
            EmptyCart,
            Summary
        },
        methods:{
            addItem(item){
                this.$store.dispatch("addToCart", item)
            },
            removeItem(item){
                this.$store.dispatch("removeFromCart", item.id)
            },
            checkout(){
                swal("Good Job!", "Your order is placed successfully", "success").then(
                    value => {
                        window.location.href = "/cart";
                    }
                );
            }
        },
        computed:{
            cartItems(){
                return this.$store.state.cartItems;
            },
            totalPrice(){
                return this.$store.getters.totalPrice;
            }
        }
    }
</script>

<style scoped>
.cart-outer{
    flex-direction: column;
    height: 100vh;
}
.cart-body {
    background: #efe9e2;
    flex: 1;
    overflow-y: auto; 
}
.cart-quantity {
    display: inline-block;
    padding: 3px;
    width: 70px;
    height: 28px;
    border-radius: 2px; 
    background-color: #fff;
    margin: 0 5px;
    text-align: center;
}
.cart-items {
    display: flex;
    width: 430px;
    justify-content: space-between;
    padding: 10px;
    background: white;
}
.my-cart {
    color: orange; 
    font-weight: 600;
}
input[type="text" ]{
    border: none;
    width: 100%;
    font-size: 14px; 
    font-weight: 500;
    vertical-align: middle;
    text-align: center;
    outline: none;
}
.fw-600 {
    font-weight: 600;
}
.line {
    height: 1px;
    border-bottom: 1px solid Oblack;
}
.w-120{
    width: 120%;
}
.w-60 {
    width: 60%;
}
.add,
.remove {
    width: 28px;
    height: 28px;
    background: linear-gradient(#fff, •#f9f9f9); 
    border: 1px solid •#c2c2c2;
    cursor: pointer;
    font-size: 16px;
    border-radius: 7px; 
    padding-top: 1px;
    outline: none;
}
.mt-10 {
    margin-top: 10px;
}
.mt-15 {
    margin-top: 15px;
}
.orange-red {
    color: orangered;
}
.darkblue {
    color: darkblue;
}
</style>