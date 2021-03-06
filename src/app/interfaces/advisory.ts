export interface IAdvisory {
    xml: {
        version: string,
        encoding: string
    },
    root: {
        id: string,
        uri: {
            uri: string
        },
        date: string,
        time: string,
        bsa: [{
            station: string,
            description: {
                "#cdata-section": string
            },
            sms: {
                data: string
            }
        }],
        message: string
    }
}
