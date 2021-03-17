import { IEtd } from "./etd";

export interface IStation {
    name: string,
    abbr: string,
    etd: IEtd[]
}
