import api from "@/api/api";
import axios from "axios";
import { ref } from "vue"


let getNewsDetail = (id) => {
    let news = ref([]);
    let errors = ref('');
    let isLoaded = ref(false);
    let load = async() => {
        try {
            let response = await axios.get(api.getNewsDetail + id);
            if (response.status === 404) {
                throw new Error('Page not found');
            }
            news.value = response.data.news;
            isLoaded.value = true;
        } catch (err) {
            errors.value = err;
        }
    }

    return { news, errors, isLoaded, load }
}

export default getNewsDetail;