import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData(): OpenMeteoResponse | undefined {
    const [data, setData] = useState<OpenMeteoResponse>();

    const URL = "https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timezone=America%2FChicago";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData: OpenMeteoResponse = await response.json();

            setData(jsonData);
        };

        fetchData();
    }, []);

    return data;
}