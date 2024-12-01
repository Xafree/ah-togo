import {axiosInstance} from "./http-common";
import {HomesPagesData} from "../models/home.page.model";

export async function getArticles(controller?:any) {
    return await axiosInstance.get<HomesPagesData[]>("v1/articles",  {
        signal: (controller? controller.signal : undefined),
    });
}
