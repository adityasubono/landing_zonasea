<template>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="#" class="navbar-brand">
          <img src="../assets/images/zonasea-logo.png" alt="logo zonasea" class="logo-zonasea">
        </a>
        <button type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
        <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item p-2"><a href="#benefit" class="nav-link">Benefit</a></li>
            <li class="nav-item p-2"><a href="#carakerja" class="nav-link">Cara Kerja</a></li>
            <li class="nav-item p-2"><a href="#about" class="nav-link">Tentang Kami</a></li>
            <li class="nav-item p-2">
              <button data-toggle="modal" data-target="#modalLogin" class="btn btn-outline-primary pl-4 pr-4"> Login
              </button>
            </li>
            <li class="nav-item p-2">
              <button data-toggle="modal" data-target="#modalRegister" class="btn btn-primary"> Register</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>

export default {
  name: "Navbar"
};
</script>
