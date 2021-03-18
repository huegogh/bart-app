import { ITrip } from "./trip"

export interface ITripsList {
    '?xml': {
        '@version': string,
        '@encoding': string
    },
    root: {
        '@id': string,
        uri: {
            '#cdata-section': string
        },
        origin: string,
        destination: string,
        schedule: {
            date: string,
            time: string,
            before: string,
            after: string,
            request: {
                trip: ITrip[],
            };
        };
        message: {
            legend: string
        }
    }
}
