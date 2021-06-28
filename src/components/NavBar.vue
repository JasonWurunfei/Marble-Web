<template>
  <div class="navbar">
    <nav>
      <router-link :to="{name: 'Home'}" class="btn">
        <img src="@/assets/home-icon.svg" alt="home icon" class="btn-icon">
      </router-link>
      <router-link :to="{name: 'Bags'}"  class="btn">
        <img src="@/assets/bag-icon.svg" alt="bag icon" class="btn-icon btn-icon--middle">
      </router-link>
      <router-link :to="{name: 'Profile'}" class="btn">
        <img src="@/assets/profile-icon.svg" alt="profile icon" class="btn-icon">
      </router-link>
    </nav>
  </div>
</template>

<style>
.navbar {
  width: 100%;
  height: 100%;
  background: #eee;
  display: grid;
  place-items: center;
}

.navbar nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.navbar .btn {
  display: block;
  align-self: center;
  background: #fff;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(150, 150, 150, 0.2);
}

.btn-icon {
  width: 3rem;
}
.btn-icon--middle {
  width: 4rem;
}
</style>