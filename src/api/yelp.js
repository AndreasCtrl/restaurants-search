import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer 7CMkAl4kb3QDwW2IlHd2VeLPySrY4F8-RdlxvH4reMRaltuzP0F_T5oIuISOt6I1zuSyXtP7NMbBHR2EjOXoEIz-zwoMJVfZDjJNk9QZ7D9av6nh8SbjbwLtMqZeYnYx'
    }
})