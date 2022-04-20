import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResaults] = useState({
        data: null,
        loading: false,
        error: null
    })

    const searchRestaurants = async (searchTerm) => {
        setResaults({
            data: null,
            loading: true,
            error: null
        })
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: "New York"
                }
            });
            setResaults({
                data: response.data.businesses,
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
    return [results, searchRestaurants];
}