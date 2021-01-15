<template>
  <div id="carakerja" class="rows">
    <div  class="d-flex justify-content-center p-5">
      <iframe frameborder="0" src="https://www.youtube.com/embed/kVCdAs5ergE" class="video-intro"></iframe>
    </div>
    <p  class="title-section">Bagaimana Zonasea Bekerja ?</p>
      <div  class="row work">
        <div class="tab">
          <button  id="defaultOpen" v-on:click="showOthers($event)">
            <span  class="tab-number">01</span>
            <p  class="tab-text"> Upload dokumentasi spesifikasi kapal anda segera </p>
          </button>

          <button class="tablinks" v-on:click="showOthers($event)"><span data-v-59d80223="" class="tab-number">02</span>
            <p class="tab-text"> Masukan lokasi dan waktu pembukaan posisi kapal anda </p>
          </button>

          <button class="tablinks" v-on:click="showOthers($event)"><span data-v-59d80223="" class="tab-number">03</span>
            <p class="tab-text mt-2">Pilih rute ekspedisi</p>
          </button>
          <button class="tablinks" v-on:click="showOthers($event)"><span data-v-59d80223="" class="tab-number">04</span>
            <p class="tab-text">Lakukan perjalanan dengan jadwal yang ada</p>
          </button>
        </div>
        <div id="ac1" class="tabcontent" v-bind:style="[display ? {display:'none'} : {display:'block'}]"><img data-v-59d80223=""
                                                                                         src="../assets/images/1.png"
                                                                                         class="img-work"></div>
        <div id="ac2"  class="tabcontent" v-bind:style="[display ? {display:'block'} : {display:'none'}]"><img data-v-59d80223=""
                                                                                        src="../assets/images/2.png"
                                                                                        class="img-work"></div>
        <div id="ac3"  class="tabcontent" v-bind:style="[display ? {display:'block'} : {display:'none'}]"><img data-v-59d80223=""
                                                                                        src="../assets/images/3.png"
                                                                                        class="img-work"></div>
        <div id="ac4"  class="tabcontent" v-bind:style="[display ? {display:'block'} : {display:'none'}]"><img data-v-59d80223=""
                                                                                        src="../assets/images/4.png"
                                                                                        class="img-work"></div>
      </div>
    </div>
    <div id="accordionExample" class="accordion">
      <div class="card">
        <div id="headingOne" class="card-header">
          <button type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  class="btn  btn-block text-center"> Upload dokumentasi sepsifikasi kalap anda segera
          </button>
        </div>
        <div data-v-59d80223="" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample"
             class="collapse show">
          <div data-v-59d80223="" class="card-body text-center"><img data-v-59d80223="" src="../assets/images/1.png"
                                                                     class="img-work"></div>
        </div>
      </div>
      <div data-v-59d80223="" class="card">
        <div data-v-59d80223="" id="headingTwo" class="card-header">
          <button data-v-59d80223="" type="button" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="false" aria-controls="collapseTwo" class="btn  btn-block text-center collapsed">
            Masukan lokasi dan waktu pembukaan posisi kapal anda.
          </button>
        </div>
        <div data-v-59d80223="" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample"
             class="collapse">
          <div data-v-59d80223="" class="card-body text-center"><img data-v-59d80223="" src="../assets/images/2.png"
                                                                     class="img-work"></div>
        </div>
      </div>
      <div data-v-59d80223="" class="card">
        <div data-v-59d80223="" id="headingThree" class="card-header">
          <button data-v-59d80223="" type="button" data-toggle="collapse" data-target="#collapseFour"
                  aria-expanded="false" aria-controls="collapseFour" class="btn btn-block text-center collapsed">
            Lakukan perjalanan dengan jadwal anda
          </button>
        </div>
        <div data-v-59d80223="" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample"
             class="collapse">
          <div data-v-59d80223="" class="card-body text-center"><img data-v-59d80223="" src="../assets/images/3.png"
                                                                     class="img-work"></div>
        </div>
      </div>
      <div data-v-59d80223="" class="card">
        <div data-v-59d80223="" id="headingThree" class="card-header">
          <button data-v-59d80223="" type="button" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="false" aria-controls="collapseThree" class="btn btn-block text-center collapsed"> Pilih
            rute ekpsedisi
          </button>
        </div>
        <div data-v-59d80223="" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample"
             class="collapse">
          <div data-v-59d80223="" class="card-body text-center"><img data-v-59d80223="" src="../assets/images/4.png"
                                                                     class="img-work"></div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "CaraKerja",

  data: function () {
    return {
      display: false
    };
  },
  methods:{
    showOthers: function(event) {
      console.log("id ini",event.currentTarget.id)
    }
  }

}
</script>

<style scoped>

</style>
