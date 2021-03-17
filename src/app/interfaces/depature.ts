import { IStation } from "./station";

export interface IDeparture {
    '?xml': {
        '@version': string,
        '@encoding': string
    },
    root: {
        '@id': string,
        uri: {
            '#cdata-section': string
        },
        date: string,
        time: string,
        station: IStation[],
        message: string
    }    
}

