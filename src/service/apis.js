import api from "./apiconfig";

export const recognizeImage = (data) => api.post("api/classify?model=food-classify" , data)