<script>
export default {
}
</script>

<template>

    <div class="app-container">
            
        <section>
            <div class="row">
                <div class="col-6 text-welcome gap-md row-col">
                    <h1 class="title">Benvenuti</h1>
                    <div class="row-col gap-sm">
                        <p class="paragraph">Benvenuti nell’accogliente atmosfera del Grand Hotel Esplanada di Bibione Pineda, moderno albergo di categoria 4 stelle, situato in una suggestiva posizione in mezzo ad una lussureggiante pineta, a due passi da una esclusiva e tranquilla spiaggia, in posizione praticamente frontemare . L’hotel è adiacente all’animato centro ed a breve distanza dal porto. Offre alla propria affezionata clientela i migliori comfort ed un accurato e cortese servizio frutto della quarantennale esperienza della Direzione nell’ ambito della Ospitalità Alberghiera.</p>
                        <p class="paragraph">Se la vostra idea di vacanza è quella legata ad un luogo immerso nella natura e lontano dallo stress della vita quotidiana, Bibione Pineda è la vostra meta. Anche se da tempo è una rinomata stazione turistica, Bibione Pineda ha mantenuto negli anni le caratteristiche di paesaggio incontaminato che da sempre la hanno caratterizzata. I colori, gli odori ed i suoni di Bibione Pineda sono una esperienza unica e da provare. Una penisola di sabbia, compresa tra la Laguna ed il Mare Adriatico.</p>
                        <p class="paragraph">Rinomata località balneare dell’Alto Adriatico, ad un’ora di automobile da Venezia, offre una ricca rassegna di locali di svago, zone per lo shopping e parchi giochi. L’ampia spiaggia di sabbia fine e dorata, un mare chiaro e pulito premiato da oltre 20 anni con la Bandiera blu, i 40 km di piste ciclabili, la verde pineta ed il fascino della laguna, il suo centro termale e le numerose manifestazioni offerte, ne fanno la meta ideale per le vacanze delle famiglie europee.</p>
                    </div>
                </div>
                <div class="col-6 img-welcome">
                    <img src="../assets/img-welcome.jpg" alt="">
                </div>
            </div>
        </section>

    </div>

</template>

<style lang="scss">
@use '../style/partials/variables';

.img-welcome {
    height: calc(100vh - 208px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-welcome img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.text-welcome {
    padding: 50px;
    color: variables.$color-w;
}

</style>