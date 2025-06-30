<script>
import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Mousewheel, Keyboard]);

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    initSwiper() {
      this.$nextTick(() => {
        if (this.item.gallery && this.item.gallery.length) {
          const swiperEl = document.querySelector('.mySwiper');
          if (swiperEl && !swiperEl.classList.contains('swiper-initialized')) {
            new Swiper(".mySwiper", {
              cssMode: true,
              loop:true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              mousewheel: true,
              keyboard: true,
            });
          }
        }
      });
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.initSwiper();
      }
    }
  },
  mounted() {
    if (this.visible) {
      this.initSwiper();
    }
  }
}
</script>

<template>
  <div class="popup" v-if="visible">
    <div class="popup-content row">
      <!-- IMMAGINE O GALLERY -->
      <div class="card-room-img-popup col-8">
        <!-- Se c’è una gallery -->
        <div v-if="item.gallery && item.gallery.length" class="swiper mySwiper">
          <div class="swiper-wrapper room-cover-popup">
            <div class="swiper-slide" v-for="(img, index) in item.gallery" :key="index">
              <img :src="`/public/${img}`" :alt="`Slide ${index + 1}`" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <!-- Se NON c’è una gallery -->
        <img v-else class="room-cover-popup" :src="`/public/${item.cover}`" alt="Cover image">
      </div>
      <!-- DATI -->
      <div class="room-description-box col-4 row between">
          <div class="row-col gap-md">
              <div class="row between">
                  <p class="title col-10">{{ $t(item.name) }}</p>
                  <button class="close-btn col-2" @click="closePopup">&#10005;</button>
              </div>
              <div>
                  <p class="secondary-title">{{ item.mq }}</p>
                  <p v-if="item.persons === '1'">{{ $t("rooms-persons-1") }}{{ item.persons }}{{ $t("rooms-persons-2") }}</p>
                  <p v-else>{{ $t("rooms-persons-1") }}{{ item.persons }}{{ $t("rooms-persons-3") }}</p>
              </div>
              <div class="row-col gap-sm">
                  <p>{{ $t("rooms-service") }}</p>
                  <ul class="row gap-sm">
                      <li v-for="service in item.services" :key="service.id" class="badge">
                          {{ $t(service) }}
                      </li>
                  </ul>
              </div>
              <div class="row-col gap-sm">
                  <p>{{ $t("rooms-balcony") }}</p>
                  <ul class="row gap-sm">
                      <li v-for="balcony in item.balcony" :key="balcony.id" class="badge">
                          {{ $t(balcony) }}
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.popup {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh;
  background-color: variables.$color-shade;
}

.popup-content {
    height: 100%;
    pointer-events: visible;
}

.room-description-box {
    padding: 20px;
    background-color: variables.$color-b;
}

.card-room-img-popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: auto;
}

.room-cover-popup {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.close-btn {
    height: fit-content;
    font-size: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: variables.$color-w;
    cursor: pointer;
}

.swiper {
    max-width: 1000px;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-prev, .swiper-button-next {
    color: variables.$color-brand !important;
}

/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

  .popup-content {
    flex-direction: column-reverse;
    height: auto;
  }

  .popup {
    padding: 3vh;
  }

  .card-room-img-popup.col-8 {
    width: 100%;
  }

  .room-description-box.col-4 {
    width: 100%;
  }

  .swiper {
    max-width: 100vw;
  }

}

</style>