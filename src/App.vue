<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
  <div id="app">
    <Navbar />
    <Iklan />
    <Benefit />
    <CaraKerja />
    <Footer />
    <About />
    <Icon />
    <Login />
    <Register />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Iklan from "./components/Iklan.vue";
import Benefit from "./components/Benefit.vue";
import CaraKerja from "./components/CaraKerja";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Icon from "@/components/Icon";
import Login from "@/components/Login";
import Register from "@/components/Register";
export default {
  name: "App",
  components: {
    Register,
    Login,
    Icon,
    About,
    Footer,
    CaraKerja,
    Benefit,
    Iklan,
    Navbar,
  },
};
</script>
