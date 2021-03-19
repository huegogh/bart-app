import { IEstimate } from "./estimate";

export interface IEtd {
    destination: string,
    abbreviation: string,
    limited: string,
    estimate: IEstimate[]
}
