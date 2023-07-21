//get news by month
//receive month, default false for all news

import api from "@/api/api";
import axios from "axios";
import { ref } from "vue"

let getNews = () => {
    let news = ref([]);
    let errors = ref('');
    let isLoaded = ref(false);
    let load = async(month = 'all') => {
        try {
            let response = await axios.get(api.getNews + "?month=" + month);

            if (response.status === 404) {
                throw new Error('Page not found');
            }

            news.value = response.data.news;
            isLoaded.value = true;

        } catch (err) {
            errors.value = err.message;
        }
    }

    return { news, errors, isLoaded, load };
}

export default getNews;