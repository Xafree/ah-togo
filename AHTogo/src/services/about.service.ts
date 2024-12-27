import {axiosInstance} from "./http-common";
import {HomesPagesData} from "../models/home.page.model";
import {DonsPagesModel} from "../models/dons-articles-model";

export async function getInfoAboutPage(controller?:any) {
    return await axiosInstance.get<DonsPagesModel[]>("v1/dons",  {
        signal: (controller? controller.signal : undefined),
    });
}

export async function getNews(controller?:any) {
    return await axiosInstance.get<HomesPagesData[]>("v1/news",  {
        signal: (controller? controller.signal : undefined),
    });
}