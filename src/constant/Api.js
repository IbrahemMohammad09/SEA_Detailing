// const URL = "https://seadetailing.pythonanywhere.com/";
const URL = "https://sea-cardetailing.com/";


const Api = {
    GET: {
        ORDERLIST: `${URL}api/requests/`,
        PICTURELIST: `${URL}api/pictures/`,
        RATESLIST: URL+'api/rates/',
        RATESALLLIST: URL+'api/rates/all',
    },
    POST: {
        CREATEORDER: `${URL}api/requests/create/`,
        CREATEPICTURE: `${URL}api/pictures/create/`,
        LOGIN: `${URL}api/login/`,
        CREATERATE: URL+'api/rates/create/',
    },
    DELETE: (id) => ({
        DELETEORDER: `${URL}api/requests/${id}/delete/`,
        DELETEPICTURE: `${URL}api/pictures/${id}/delete/`,
        DELETERATE: `${URL}api/rates/${id}/delete/`
    }),
    PUT: (id) => ({
        UPDATEORDER: `${URL}api/requests/${id}/update/`,
        UPDATERATE: `${URL}api/rates/${id}/update/`
    })
};

export  { URL, Api };
