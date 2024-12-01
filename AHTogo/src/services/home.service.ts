import {axiosInstance} from "./http-common";
import {HomesPagesData} from "../models/home.page.model";

export async function getDataHomePage(controller?:any) {
    return await axiosInstance.get<HomesPagesData[]>("v1/home",  {
        signal: (controller? controller.signal : undefined), // Associer le signal d'annulation
    });
}
