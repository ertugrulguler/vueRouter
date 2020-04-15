<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>İsim:{{$route.query.name}}</p>
    <p>Soyisim: {{$route.query.lastName}}</p>
  </div>
</template>
<script>
  export default {}
</script>
