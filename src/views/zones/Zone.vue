<template>
    <div v-if="zoneName == 'Yangon'"><Yangon></Yangon></div>
    <div v-if="zoneName == 'Mandalay'"><Mandalay></Mandalay></div>
    <div v-if="zoneName == 'NayPyiTaw'"><NayPyiTaw></NayPyiTaw></div>
    <div v-if="zoneName == 'Bagan'"><Bagan></Bagan></div>
    <div v-if="zoneName == 'ChaungThar'"><ChaungThar></ChaungThar></div>
    <div v-if="zoneName == 'NgweSaung'"><NgweSaung></NgweSaung></div>
    <div v-if="zoneName == 'MawLaMying'"><MawLaMying></MawLaMying></div>
    <div v-if="zoneName == 'Magway'"><Magway></Magway></div>
    <div v-if="zoneName == 'Rakhine'"><Rakhine></Rakhine></div>
    <div v-if="zoneName == 'Bago'"><Bago></Bago></div>
    <div v-if="zoneName == 'Pyay'"><Pyay></Pyay></div>
    <div v-if="zoneName == 'Kachin'"><Kachin></Kachin></div>
    <div v-if="zoneName == 'Kayah'"><Kayah></Kayah></div>
    <div v-if="zoneName == 'Kayin'"><Kayin></Kayin></div>
    <div v-if="zoneName == 'PyinOoLwin'"><PyinOoLwin></PyinOoLwin></div>
    <div v-if="zoneName == 'ShanSouth'"><ShanSouth></ShanSouth></div>
    <div v-if="zoneName == 'ShanNorth'"><ShanNorth></ShanNorth></div>
    <div v-if="zoneName == 'TaninTharYi'"><TaninTharYi></TaninTharYi></div>
    <div v-if="zoneName == 'SaGaing'"><SaGaing></SaGaing></div>
    <div v-if="zoneName == 'Chin'"><Chin></Chin></div>
    <div v-if="zoneName == 'GoldenTriangle'"><GoldenTriangle></GoldenTriangle></div>
    <div v-if="zoneName == 'HotelSuppliers'"><HotelSuppliers></HotelSuppliers></div>
    <div class="hotel-zone">
        <div class="container">
            <div class="paginate ">
                <pagination v-model="currentPage" :records="total" :per-page="32" @paginate="getData(currentPage)"/>
            </div>
            <select name="" id="" class="form-select w-25 my-3" @change="hotelsBySubzone">
                <option :value="'zonename'+zoneName">All</option>
                <option v-for="(subzone, index) in subzones" :key="index" :value="subzone.id">{{subzone.name}}</option>
            </select>
            <div class="row">
                
                <div class="col-lg-3 col-md-6 col-sm-4" v-for="(hotel, index) in hotels" :key="index">  
                    <div class="card hotel-card  shadow p-2 mb-5 bg-body rounded">
                        <div class="card-header">
                            <img :src="hotel.image" alt="">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{hotel.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{hotel.owner}}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Sr. No {{hotel.sr_no}}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">{{hotel.total_room}} Room</h6>
                            <p class="card-text"><i class="fa fa-phone"></i> {{hotel.phone}}</p>
                            <p class="card-text"><i class="fa fa-location-arrow"></i> {{hotel.email}}</p>
                            <p class="card-text"><i class="fa fa-map-marker"></i> {{hotel.address}}</p>
                            <a :href="hotel.web_link" class="card-link btn btn-outline-light">View Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paginate " >
                <div>&nbsp;</div>
                <pagination v-model="currentPage" :records="total" :per-page="32" @paginate="getData(currentPage)"/>
                <div>&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
import HotelSuppliers from '../../components/zones/HotelSuppliers'
import GoldenTriangle from '../../components/zones/GoldenTriangle'
import Chin from '../../components/zones/Chin'
import SaGaing from '../../components/zones/SaGaing'
import TaninTharYi from '../../components/zones/TaninTharYi'
import ShanNorth from '../../components/zones/ShanNorth'
import ShanSouth from '../../components/zones/ShanSouth'
import PyinOoLwin from '../../components/zones/PyinOoLwin'
import Kayin from '../../components/zones/Kayin'
import Kayah from '../../components/zones/Kayah'
import Kachin from '../../components/zones/Kachin'
import Pyay from '../../components/zones/Pyay'
import Bago from '../../components/zones/Bago'
import Rakhine from '../../components/zones/Rakhine'
import Magway from '../../components/zones/Magway'
import MawLaMying from '../../components/zones/MawLaMying'
import NgweSaung from '../../components/zones/NgweSaung'
import ChaungThar from '../../components/zones/ChaungThar'
import Bagan from '../../components/zones/Bagan'
import NayPyiTaw from '../../components/zones/NayPyiTaw'
import Mandalay from '../../components/zones/Mandalay'
    import Yangon from '@/components/zones/Yangon'
    import getHotels from '@/composables/getHtels'
    import { ref } from 'vue';
    import api from "@/api/api";
    import axios from "axios";

    export default {
        components: {
    HotelSuppliers,
    GoldenTriangle,
    Chin,
    SaGaing,
    TaninTharYi,
    ShanNorth,
    ShanSouth,
    PyinOoLwin,
    Kayin,
    Kayah,
    Kachin,
    Pyay,
    Bago,
    Rakhine,
    Magway,
    MawLaMying,
    NgweSaung,
    ChaungThar,
    Bagan,
    NayPyiTaw, Mandalay, Yangon },
        props: ['zoneName'],
        setup(props) {
            let default_img = require('@/assets/images/default.webp');
            const currentPage = ref(1);

            let {hotels, total, errors, load, subzones} = getHotels(props.zoneName);
            load();

            let getData = (page) => {
                load(page);
            }

            // -------- filter by sub zone ---- 
            let hotelsBySubzone =  async(event) => {
                let id = event.target.value;
                
                let response = await axios.get(api.getHotelsBySubzone + "?subzoneId=" + id);

                const filteredHotels = response.data.hotels.data.map(hotel => {
                    let img = hotel.image == null ? require('@/assets/images/default.webp') : api.image_url + hotel.image;
                    return {...hotel, image: img };
                });

                hotels.value = filteredHotels;
                total.value = filteredHotels.length;
                
            }

            return {hotels, default_img, currentPage, getData, total, subzones, hotelsBySubzone,}
        }
    }
</script>

<style >


.paginate {
    display: flex;
    justify-content: center;
}

.paginate .btn-group button {
    padding: 2px 10px;
    color: #333 !important;
    border-radius: 10px !important;
    border: 1px solid rgb(15, 99, 168);
    transition: .3s ease;
}

.paginate .btn-group button:hover {
    background: rgb(15, 99, 168);
    color: #fff !important;
}


</style>
