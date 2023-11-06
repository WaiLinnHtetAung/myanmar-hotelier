let host = 'https://adminmha.itgatewaymm.com/api/v1/';

let api = {
    getZones: host + 'zones',
    getHotels: host + 'hotels',
    getHotelsBySubzone: host + 'hotelsBySubzone',
    getNews: host + 'news',
    getNewsDetail: host + 'news/',
    getSearchHotels: host + 'searchHotels',

    sendHotelMemberForm: host + 'createHotelMemberForm',
    image_url: 'https://adminmha.itgatewaymm.com/storage/images/',
};

export default api;