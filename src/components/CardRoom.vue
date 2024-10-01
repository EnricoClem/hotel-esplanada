<script>
import RoomPopup from './RoomPopup.vue';

export default {
  components: {
    RoomPopup
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPopupVisible: false,
      selectedItem: null
    };
  },
  methods: {
    showPopup(item) {
      this.selectedItem = item;
      this.isPopupVisible = true;
    }
  }
}
</script>

<template>


    <li class="card-room col-4">
        <a href="#" @click.prevent="showPopup(item)">
            <div class="card-room-text">
                <p class="secondary-title">{{ $t(item.name) }}</p>
                <p class="caption" v-if="item.persons === '1'">{{ $t("rooms-persons-1") }}{{ item.persons }}{{ $t("rooms-persons-2") }}</p>
                <p class="caption" v-else>{{ $t("rooms-persons-1") }}{{ item.persons }}{{ $t("rooms-persons-3") }}</p>
            </div>
            <div class="card-room-img">
                <img class="room-cover" :src="`/assets/${ item.cover }`" alt="">
                <img class="zoom-icon" src="../assets/zoom-icon.svg" alt="">
            </div>
        </a>
    </li>
    
    <RoomPopup :item="selectedItem" :visible="isPopupVisible" @close="isPopupVisible = false" />


</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.card-room {
    flex-wrap: nowrap;
    padding: 5px;
}

.card-room-text {
    background-color: variables.$color-shade;
    padding: 10px;
}

.card-room-img {
    height: 18vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.room-cover {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.zoom-icon {
    position: absolute;
    filter: invert(97%) sepia(3%) saturate(11%) hue-rotate(37deg) brightness(102%) contrast(105%);
    width: 80px;
    display: none;
}

.card-room:hover .zoom-icon {
    display: block;
}

</style>