import { IItem } from "./item";

export interface IStnschedule {
    '?xml': {
        '@version': string,
        '@encoding': string,
    },
    root: {
        uri: {
            '#cdata-section': string
        },
        date: string,
        station: {
            name: string,
            abbr: string,
            item: IItem[]
        },
        message: {
            legend: string
        }
    }
}
