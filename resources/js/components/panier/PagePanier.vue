<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12">
                <div id="content">
                    <h1>Recapitulatif</h1>
                </div>
                <onglet>
                    <onglet-item>01.Recapitulatif</onglet-item>
                    <onglet-item>02.Adresse</onglet-item>
                    <onglet-item>03.Paiment</onglet-item>
                </onglet>
                <recapitulatif></recapitulatif>
            </div>
        </div>
    </div>
</template>

<script>

import Recapitulatif from './Recapitulatif';
import {BNav, BNavItem}from 'bootstrap-vue';
export default{
    
        components : {
            Recapitulatif,
            Onglet: BNav,
            OngletItem: BNavItem
        }
        
    
}
</script>
