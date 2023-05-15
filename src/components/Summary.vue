<template>
    <div class="row" style="width: 50%">
        <div class="col-md-4">
            <h6>Total:</h6>
            <h6>Promo Code:</h6>
            <h6>Shipping: </h6>
            <div class="my-3 line w-120"></div>
                <h6>Subtotal:</h6> 
        </div>
        <div class="col-md-4">
            <h6>R$ {{ totalPrice }}</h6>
            <h6>SWEETDISH</h6>
            <h6>R$ 50</h6>
            <div class="my-3 line |-60"></div>
            <h6>R$ {{ totalPrice + 50 }}</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Summary",
        props:["totalPrice"]
    }
</script>

<style scoped>
.line {
    height: 1px;
    border-bottom: 1px solid Oblack;
}
.W-120 {
    width: 120%;
}
.W-60 {
    width: 60%;
}
</style>