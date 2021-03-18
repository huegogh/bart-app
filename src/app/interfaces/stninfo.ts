export interface IStninfo {
    '?xml': {
        '@version': string,
        '@encoding': string
    },
    root: {
        '@id': string,
        uri: {
            '#cdata-section': string
        },
        stations: {
            station: {
                name: string,
                abbr: string,
                gtfs_latitude: string,
                gtfs_longitude: string,
                address: string,
                city: string,
                county: string,
                state: string,
                zipcode: string,
                north_routes: {
                    route:  string []
                },
                south_routes: { 
                    route: string []
                },
                north_platforms: { 
                    platform: string []
                },
                south_platforms: { 
                    platform: string []
                },
                platform_info: string,
                intro: { 
                    '#cdata-section': string
                },
                cross_street: { 
                    '#cdata-section': string
                },
                food: { 
                    '#cdata-section': string
                },
                shopping: { 
                    '#cdata-section': string
                },
                attraction: { 
                    '#cdata-section': string
                },
                link: { 
                    '#cdata-section': string
                }
            }
        },
        message: string
    }
}
