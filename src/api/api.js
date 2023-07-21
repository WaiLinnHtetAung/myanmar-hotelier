let host = 'http://localhost:8000/api/v1/';

let api = {
    getZones: host + 'zones',
    getHotels: host + 'hotels',
    getHotelsBySubzone: host + 'hotelsBySubzone',
    getNews: host + 'news',
    getNewsDetail: host + 'news/',
    image_url: 'http://localhost:8000/storage/images/',
};

export default api;