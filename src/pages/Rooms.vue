<script>
import { store } from '../store.js'
import CardRoom from '../components/CardRoom.vue';

  export default {
    components: {
        CardRoom
    },
    data() {
        return {
            store: store,
        }
    },
  };
</script>

<template>

    <div class="app-container">
            
        <section>
            <div class="row between">
                <div class="rooms-container col-10 row-col">
                    <h1 class="rooms-title-container title">Le camere</h1>
                    <div class="rooms-card-container">
                        <ul class="card-container row">
                            <CardRoom v-for="room in store.allRooms" :key="room.id" :item="room"/>
                        </ul>
                    </div>
                </div>
                <!-- Immagine laterale -->
                <div class="col-2 img-rooms-layout">
                    <img src="../assets/img-rooms-layout.png" alt="">
                </div>                
            </div>
        </section>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables.scss';

.rooms-container {
    height: calc(100vh - 208px);
    overflow: auto;
    flex-wrap: nowrap;
}

.rooms-title-container {
    padding: 50px 50px 20px 50px;
    color: variables.$color-w;
}

.rooms-card-container {
    padding: 0px 40px 50px 40px;
    color: variables.$color-w;
}

.img-rooms-layout {
    height: calc(100vh - 208px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-rooms-layout img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

</style>