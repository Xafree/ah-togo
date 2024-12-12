import {axiosInstance} from "./http-common";
import {Articles} from "../models/articles-model";

export async function getArticles(controller?:any) {
    return await axiosInstance.get<Articles[]>("v1/articles",  {
        signal: (controller? controller.signal : undefined),
    });
}
