<script>
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
    }
  }
}
</script>

<template>
  <div class="popup" v-if="visible">
    <div class="popup-content row">
      <!-- IMMAGINE -->
      <div class="card-room-img-popup col-8">
          <img class="room-cover-popup" :src="`/assets/${ item.cover }`" alt="">
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

}

</style>