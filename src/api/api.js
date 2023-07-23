let host = 'https://mha.admin.itgatewaymm.com/api/v1/';

let api = {
    getZones: host + 'zones',
    getHotels: host + 'hotels',
    getHotelsBySubzone: host + 'hotelsBySubzone',
    getNews: host + 'news',
    getNewsDetail: host + 'news/',

    sendHotelMemberForm: host + 'createHotelMemberForm',
    image_url: 'https://mha.admin.itgatewaymm.com/storage/images/',
};

export default api;