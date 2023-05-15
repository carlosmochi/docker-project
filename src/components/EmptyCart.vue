<template>
    <div class="container my-'" style="text-align: center">
        <img src="../assets/shopping-cart.png" width="200px" />
        <div class="mt -4">
            <h4 class="orange-red fw-600">Your cart is empty</h4>
            <h5 class="darkblue fw-600">You can go to home page to view more food items.</h5> 
        </div>
    </div>    
</template>

<script>
    export default{
        name: "Empty-Cart"
    }
</script>

<style scoped>
.orange-red {
    color: orangered;
}
.darkblue {
    color: darkblue;
}
.fw-600 {
    font-weight: 600;
}
</style>