<template>
  <div class="page-not-found">
    <img src="@/assets/404.svg" alt="404 image">
    <h1>Oops~ Page not found... </h1>
  </div>
</template>


<style>
.page-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  color: white;
  font-size: 1.1rem;
}

.page-not-found::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("~@/assets/404-background.jpg");
  background-size: 100% 100%;
  z-index: -2;
}

.page-not-found::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  opacity: 0.15;
  background-size: 100% 100%;
  z-index: -1;
}
</style>