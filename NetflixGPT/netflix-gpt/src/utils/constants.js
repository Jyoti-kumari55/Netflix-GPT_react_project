export const LOGO = 
      'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const User_Avatar = 
       "https://occ-0-6380-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";
       
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

  export const SUPPORTED_LANG = [ 
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"}, 
    {identifier: "korean", name: "Korean"},
    {identifier: "chinese", name: "Chinese"} 
   ];

   export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY ;
   
