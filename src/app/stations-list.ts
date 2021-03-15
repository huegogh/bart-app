import { IStation } from "./station";

export interface IStationsList {
  '?xml': {
    '@version': string,
    '@encoding': string,
  };
  root: {
    uri: {
      '#cdata-section': string,
    };
    stations: {
      station: IStation[];
    };
    message: string,
  };
}
