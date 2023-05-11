<template>
    <div class="d-flex food-details-outer">
        <Header></Header>
        <div class="food-details">
            <div class="continer mb-5">
                <h4 class="my-4 fw-600">Add Item to Cart</h4> 
                <div class=" row">
                    <div class="col-md-4" style="cursor: pointer">
                        <img :src="details.url" width="300px" height="300px" style="border-radius: 15px" />
                    </div>
                    <div class="col-md-4" style="cursor: pointer">
                         <h5 class="my-4 fw-600">Name: {{ details.name }}</h5> 
                         <h5 class="my-4 fw-600">Price: {{ details.price }}</h5> 
                         <h5 class="my-4 fw-600">Description: {{ details.description }}</h5> 
                         <h5 class="my-4 fw-600">Rating: {{ details.rating }}</h5>
                         <div>
                            <button v-on:click="goToCart" class="btn btn-primary">Go to Cart</button>
                            <button v-on:click="addToCart" class="btn btn-success">Add Item </button> 
                            <button v-on:click="removeFromCart" class="btn btn-danger">Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div> 
</template>

<script>
    import Header from './layout/Header'
    import Footer from './layout/Footer'
    export default {
        name:"FoodDetails",
        components:{
            Header,
            Footer
        },
        data(){
            return {
                details: this.$route.params
            }
        },
        methods:{
            goToCart(){
                this.$router.push('/cart');
            },
            addToCart(){
                // this.$store.commit("cardItemCountIncrement")
                this.$store.dispatch("addToCart", this.details)
            },
            removeFromCart(){
                this.$store.dispatch("removeFromCart", this.details.id)
            }
        },
        created(){
            if(this.$route.params.id != undefined)
                localStorage.setItem("details", JSON.stringify(this.$route.params))
        },
        mounted(){
            this.details = JSON.parse(localStorage.getItem("details"))
        }
    };
</script>
<style scoped>
.food-details-outer {
    flex-direction: column;
    height: 100vh;
}
.food-details {
    background: #efe9e2;
    flex: 1;
    overflow-y: auto;
}
.fw-600 {
    font-weight: 600
}
</style>