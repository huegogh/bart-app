import { IFare } from "./fare";
import { ILeg } from "./leg";

export interface ITrip {
    '@origin': string,
    '@fare': string,
    '@origTimeMin': string,
    '@destination': string,
    '@origTimeDate': string,
    '@destTimeMin': string,
    '@destTimeDate': string,
    '@clipper': string,
    '@tripTime': string,
    fares: {
        '@level':string,
        fare: IFare[]
    },
    leg: ILeg[]
}
