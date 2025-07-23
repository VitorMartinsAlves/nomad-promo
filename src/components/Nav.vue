<template>

  <!-- <div id="celular-mulher-aviao">
    <img class="v02-1" src="../assets/02-1.svg">
    <img class="v09-1" src="../assets/09-1.svg">
  </div> -->

  <nav class="navbar navbar-expand-lg rounded-pill position-relative">

    <div class="container-fluid">
      <div class="navbar-nav d-flex justify-content-between align-items-center w-100">

        <router-link to="/">
          <img id="logo" src="../assets/logo-alianca-nomad.svg" alt="logo Aliança">
        </router-link>

        <a style="margin-left: 200px;" class="nav-link" href="#stop-plate-position">
          Por que escolher?
        </a>
        <a class="nav-link" href="#depoimentos">
          Depoimentos
        </a>
        <a class="nav-link" href="#faq-pos">
          FAQ
        </a>
        <a class="nav-link" href="#kids-pos">
          Aliança Kids
        </a>
        <a id="stuped-button" href="#form-pos">
          <button>Começar agora</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Button from '../components/utils/Button.vue'
</script>

<style lang="scss" scoped>
#stuped-button {
  display: none;
}

nav {
  margin-top: 40px;
  height: 80px;
  // background-color: #00223C;

  .nav-link {
    font-size: 18px;
  }

  a,
  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    // color: #fff;
  }
}

#celular-mulher-aviao {
  display: none;
}

#ferias .v02-1,
#ferias .v09-1 {
  display: none;
}

@media (max-width: 768px) {
  button {
    font-size: 12px;
    font-weight: 400;
    background-color: #5D6DDA;
    padding: 10px;
    // margin-top: 23px;
    // text-align: center;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    position: relative;
  }

  #stuped-button {

    display: block;
  }

  .btWrap {
    width: 170px;
  }

  #logo {
    max-width: 190px;
    // left:20px;
  }

  .navbar-nav {
    flex-direction: row;
  }

  nav {
    margin-top: 25px;

    .nav-link {
      display: none;
    }
  }

  #logo-alianca {
    margin-right: 0;
    width: 130px;
  }

  .ganhe {
    display: block;
  }

  #celular-mulher-aviao {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    // z-index: 50;
    height: auto;
    width: 180px;

    .v02-1 {
      position: absolute;
      top: 110px;
      right: 0;

      width: 80%;
      z-index: 5;
    }

    .v09-1 {
      position: absolute;
      top: 0;
      right: 30px;
      width: 100%;
    }
  }

}
</style>
