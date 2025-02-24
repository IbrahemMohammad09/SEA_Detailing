const URL = "https://seadetailing.pythonanywhere.com/";
// const URL = "https://sea-detailing.com/";


const Api = {
    GET: {
        ORDERLIST: `${URL}api/requests/`,
        PICTURELIST: `${URL}api/pictures/`
    },
    POST: {
        CREATEORDER: `${URL}api/requests/create/`,
        CREATEPICTURE: `${URL}api/pictures/create/`,
        LOGIN: `${URL}api/login/`
    },
    DELETE: (id) => ({
        DELETEORDER: `${URL}api/requests/${id}/delete/`,
        DELETEPICTURE: `${URL}api/pictures/${id}/delete/`
    }),
    PUT: (id) => ({
        UPDATEORDER: `${URL}api/requests/${id}/update/`
    })
};

export { URL, Api };
