<script>
import iconMap from '../assets/map-ICON.png';

export default {
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const attribution = new ol.control.Attribution({
            collapsible: false
        });

        const map = new ol.Map({
            controls: ol.control.defaults({ attribution: false }).extend([attribution]),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                })
            ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.fromLonLat([13.00455, 45.63199]),
            maxZoom: 18,
            zoom: 13
            })
        });

        const iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 1],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: iconMap,
                scale: 0.12
            })
        });

        const feature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([13.00455, 45.63199]))
        });

        feature.setStyle(iconStyle);

        const vectorSource = new ol.source.Vector({
            features: [feature]
        });

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });

        map.addLayer(vectorLayer);
        }
    }
}
</script>

<template>
  <div class="app-container info-scroll">
    <section class="info-section">
      <div class="row info-row-phone">
        <div class="col-6 img-info">
            <img src="@/assets/img-info.jpg" alt="info">
        </div>
        <div class="col-6 text-info gap-md row-col">
            <h1 class="title">{{ $t("info-page") }}</h1>
            <div class="row-col between gap-md data-info-height">
                <div class="row between ">
                    <div class="row-col col-info-text gap-md">
                        <p class="secondary-title">Grand Hotel Esplanada</p>
                        <p>Via delle Dune 6 - 30028<br>Bibione Pineda VE Italy</p>
                        <div>
                            <a class="maps-btn" href="https://www.google.com/maps/place/Via+delle+Dune,+6,+30020+Bibione+VE/@45.6318276,12.9993865,15z/data=!4m6!3m5!1s0x477bed69ea690461:0x459e5da3325244c6!8m2!3d45.6318614!4d13.0046007!16s%2Fg%2F11cpgpv4_9?entry=ttu">
                                {{ $t("info-maps-btn") }}
                            </a>
                        </div>
                    </div>
                    <div class="row-col col-info-text gap-sm">
                        <p>Tel: +39 043143260<br>Fax: +39 0431430832</p>
                        <p>info@hotelesplanada.it<br>info@esplanada.it</p>
                        <p>Clementi Group Hotels S.r.l.br<br>P.IVA: 03056870276<br>PEC: clementihotels@pec.it</p>
                    </div>
                </div>
                <div class="row-col gap-sm map-container">
                    <div id="map" style="width: auto; height: 100%;"></div>
                </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use '../style/partials/variables.scss';

.img-info {
  height: calc(100vh - 208px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-info img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.text-info {
  padding: 50px;
  color: variables.$color-w;
  height: calc(100vh - 208px);
}

.col-info-text {
    width: 48%;
}

.maps-btn {
    padding: 3px 6px;
    border: 1px solid variables.$color-w;
}

.map-container {
    height: 59%;
}

.data-info-height {
    height: 86%;
}


/* Media query SMARTPHONE ____________________________________________________________ */

@media screen and (max-width: 480px) {

    .app-container.info-scroll {
        overflow: auto;
    }

    .info-section .col-6 {
        width: 100%;
    }

    .info-row-phone {
        flex-direction: column-reverse;
    }

    .data-info-height {
        flex-direction: row;
    }

    .img-info {
        height: 400px;
    }

    .img-info img {
        object-fit: cover;
        width: auto;
    }

}

</style>
