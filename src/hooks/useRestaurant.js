import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResaults] = useState({
        data: null,
        loading: false,
        error: null
    })

    const searchRestaurant = async (id) => {
        setResaults({
            data: null,
            loading: true,
            error: null
        })
        try {
            const response = await yelp.get(`/${id}`);
            setResaults({
                data: response.data,
                loading: false,
                error: null
            })
        } catch (err) {
            setResaults({
                data: null,
                loading: false,
                error: "Something went wrong"
            })
        }
    }
    return [results, searchRestaurant];
}