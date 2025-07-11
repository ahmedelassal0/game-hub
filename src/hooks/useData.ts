import { CanceledError, type AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";


interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(context: string, requsetConfig?: AxiosRequestConfig, dependancies?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient.get<FetchResponse<T>>(context, { signal: controller.signal, ...requsetConfig })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, dependancies ? [...dependancies] : []);

    return { data, error, isLoading };
}

export default useData;