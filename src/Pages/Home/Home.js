import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCardSummery from '../Shared/NewscardSummery/NewsCardSummery';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {
                allNews.map(news=>{
                    return <NewsCardSummery
                    key={news._id}
                    news={news}
                    ></NewsCardSummery>
                })
            }
        </div>
    );
};

export default Home;