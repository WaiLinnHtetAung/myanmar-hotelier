import api from '@/api/api'
import { ref } from 'vue'
import axios from 'axios'

let getZones = () => {
    let zones = ref([]);
    let errors = ref('');

    let load = async() => {
        try {
            let response = await axios.get(api.getZones);
            if (response.status === 404) {
                throw new Error("page not found")
            }

            zones.value = response.data.zones;
        } catch (err) {
            console.log(err.message);
        }
    }

    return { zones, errors, load };
}

export default getZones;