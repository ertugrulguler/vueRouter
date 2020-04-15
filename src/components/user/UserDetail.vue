<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>

    Kullanıcı ID: {{$route.params.id}}
    <router-link tag="button" class="btn btn-primary btn-xs" :to="{name:'userEdit',params:{id:$route.params.id},query:{name:'Ertuğrul',lastName:'Güler'}}">Düzenle</router-link>
    <!-- <router-link tag="button" class="btn btn-primary btn-xs" :to="'/user/'+$route.params.id+'/edit'">Düzenle</router-link> -->
    <!-- <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p> -->
  </div>
</template>
<script>
  export default {}
</script>
