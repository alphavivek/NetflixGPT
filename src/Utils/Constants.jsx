export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Netflix_Background_Img = "https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_medium.jpg";

export const photoURL = "https://avatars.githubusercontent.com/u/109842993?v=4";

export const API_Options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
    }
};

export const IMG_URL_CDN = "https://image.tmdb.org/t/p/w500";

export const Supported_languages = [
    {identifier : "en" , name : "English"},
    {identifier : "hindi" , name : "Hindi"},
    {identifier : "chinese" , name : "Chinese"},
];

export const Gemini_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
