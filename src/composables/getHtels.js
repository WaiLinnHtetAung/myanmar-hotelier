import { ref } from "vue";
import api from "@/api/api";
import axios from "axios";

let getHotels = (zoneName) => {
    let hotels = ref([]);
    let errors = ref('');
    let total = ref('');
    let subzones = ref([]);

    let load = async(page = 1) => {
        try {
            let response = await axios.get(api.getHotels + "?page=" + page + '&zoneName=' + zoneName);

            if (response.status === 404) {
                throw new Error("Page not found")
            }

            hotels.value = response.data.hotels.data.map(hotel => {
                let img = hotel.image == null ? require('@/assets/images/default.webp') : api.image_url + hotel.image;
                return {...hotel, image: img };
            });


            subzones.value = response.data.subzones;

            total.value = response.data.hotels.total;
        } catch (err) {
            console.log(err.message);
        }
    }

    return { hotels, total, errors, load, subzones }
}

export default getHotels;