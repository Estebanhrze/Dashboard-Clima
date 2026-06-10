export interface OpenMeteoResponse {
    current: {
        temperature_2m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
        wind_speed_10m: number;
    };

    current_units: {
        temperature_2m: string;
        relative_humidity_2m: string;
        apparent_temperature: string;
        wind_speed_10m: string;
    };
}