<template>
  <div class="box">
    <ul>
      <li v-for="i in doneTodos" key="i.id">{{ i.name }}</li>
    </ul>
    <div>
      <h4>{{count}}</h4>
      <button v-on:click="increment_count">Add</button>
    </div>
  </div>
</template>

<script>
export default{
  name: "HelloWorld",
  computed: {
    doneTodos(){
      return this.$store.getters.doneTodos;
    },
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    increment_count(){
      // this.$store.commit("increment_count");
      this.$store.dispatch("increment")
    }
  }

}
</script>

<style scoped>
.box{
  margin: 75px auto;
  width: 300px;
  background: lightcoral;
  padding-top: 10px;
}
</style>