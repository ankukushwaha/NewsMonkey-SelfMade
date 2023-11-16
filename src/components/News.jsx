// import React, { useEffect, useState } from "react";
import React from "react";
import NewsItem from "./NewsItem";
// import Loading from "./Loading";
import PropTypes from "prop-types"
// import InfiniteScroll from 'react-infinite-scroll-component';
import Articles from "./articles";

function News(props) {

    // const [articles, setArticles] = useState([]);
    // const [totalresults, setTotalResults] = useState(0);
    // const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(true);

    const heading = (props.category).slice(0,1).toUpperCase() + props.category.slice(1);
    var articles = Articles.general;

    if(props.category === 'general'){
        articles = Articles.general;
    }
    else if(props.category === 'business'){
        articles = Articles.business;
       
    }
    else if(props.category === 'entertainment'){
        articles = Articles.entertainment;
       
    }
    else if(props.category === 'health'){
        articles = Articles.health;
        
    }
    else if(props.category === 'science'){
        articles = Articles.science;
        
    }
    else if(props.category === 'sports'){
        articles = Articles.sports;
    }
    else{
        articles = Articles.technology;
    }

    // async function updateNews() {
    //     try {
    //         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pagesize}&apiKey=${props.apikey}`;

    //         setLoading(true);
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         // console.log(data); 
    //         setArticles((prevItem) => {
    //             return [...prevItem, ...(data.articles)];
    //         });
    //         setTotalResults(data.totalResults);
    //         setLoading(false);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // async function fetchMore(){
    //     try {
    //         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pagesize}&apiKey=${props.apikey}`;

    //         setPage(page + 1);
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setArticles((prevItem) => {
    //             return [...prevItem, ...(data.articles)];
    //         });
    //         // setTotalResults(data.totalResults);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     updateNews();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    return (
        <div className="flex-grow-1 mt-5">
            <h1 className={`text-center mt-5 text-${props.mode === 'light'?'black':'white'}`}>
            NewsMonkey - Top {heading} Headlines</h1>
            {/* {loading && <Loading />} */}

            {/* <InfiniteScroll
                dataLength={articles.length} // This is important to prevent unnecessary fetches
                next={fetchMore}
                hasMore={articles.length !== totalresults}
                loader={<Loading />}> */}
                <div className="container flex-grow-1">
                <div className="row mt-3">
                    {articles.map((val, index) => {
                        return <div className="col-sm-4 my-4" key={index}>
                            <NewsItem author={val.author} mode={props.mode} name={val.source.name} date={val.publishedAt} Title={val.title} description={val.description}
                                image={val.urlToImage} url={val.url}
                            />
                        </div>
                    })}
                </div>
                </div>
            {/* </InfiniteScroll> */}
        </div>
    );
}

// ORRUel_Oenuw2hI3G2LlSU-wRB4HtSL6cgA2UPI70TYJcw5P

News.defaultProps = {
    category: 'general',
    // country: 'in',
    // pagesize: 30
};

News.propTypes = {
    category: PropTypes.string,
    // country: PropTypes.string,
    // pagesize: PropTypes.number
}
export default News;