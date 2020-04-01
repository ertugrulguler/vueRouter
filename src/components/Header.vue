<template>
    <ul class="nav nav-pills">
        <router-link tag="li" to="/" active-class="active" exact><a>Home</a></router-link> <!--Exact sadece to kısmının tamamı eşleşiyorsa active classını kullan anlamında-->
        <router-link tag="li" to="/User/1" active-class="active"><a>User1</a></router-link>
        <router-link tag="li" to="/User/2" active-class="active"><a>User2</a></router-link>
    </ul>
</template>
    
