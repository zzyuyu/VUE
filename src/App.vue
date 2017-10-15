
<template>
  <!-- <div id="app"> -->
    <div id="warpper" class="container">
      <nav class="navbar navbar-default">
        <div>
         <a href="#" class="navbar-brand">
         <i class="glyphicon glyphicon-time">
           计划表
         </i>
         </a>
        </div>
      </nav>
      <div class="row">
        <div class="col-sm-3">
          <home></home>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components:{
    Home
  }
}
</script>

<style>

</style>
