import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types"
import InfiniteScroll from 'react-infinite-scroll-component';


function News(props) {

    const [articles, setArticles] = useState([]);
    const [totalresults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const category = (props.category).slice(0,1).toUpperCase() + props.category.slice(1);

    async function updateNews() {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pagesize}&apiKey=${props.apikey}`;

            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data); 
            setArticles((prevItem) => {
                return [...prevItem, ...(data.articles)];
            });
            setTotalResults(data.totalResults);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchMore(){
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pagesize}&apiKey=${props.apikey}`;

            setPage(page + 1);
            const response = await fetch(url);
            const data = await response.json();
            setArticles((prevItem) => {
                return [...prevItem, ...(data.articles)];
            });
            // setTotalResults(data.totalResults);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="flex-grow-1">
            <h1 className="text-center mt-3">NewsMonkey - Top {category} Headlines</h1>
            {loading ? <Loading /> :

            <InfiniteScroll
                dataLength={articles.length} // This is important to prevent unnecessary fetches
                next={fetchMore}
                hasMore={articles.length !== totalresults}
                loader={<Loading />}>
                <div className="container flex-grow-1">
                <div className="row mt-5">
                    {articles.map((val, index) => {
                        return <div className="col-sm-4 my-4" key={index}>
                            <NewsItem author={val.author} name={val.source.name} date={val.publishedAt} Title={val.title} description={val.description}
                                image={val.urlToImage} url={val.url}
                            />
                        </div>
                    })}
                </div>
                </div>
            </InfiniteScroll>}
        </div>
    );
}

// ORRUel_Oenuw2hI3G2LlSU-wRB4HtSL6cgA2UPI70TYJcw5P

News.defaultProps = {
    category: 'general',
    country: 'in',
    pagesize: 30
};

News.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pagesize: PropTypes.number
}
export default News;