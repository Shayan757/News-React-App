import React, {useState,useEffect} from 'react';

import NewsItems from './NewsItems';

import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)


    const [page, setPage] = useState(1);
    
    
  const fetchData = async()=>{
  const url = (`https://newsapi.org/v2/everything?q=bitcoin&apiKey=976814fa535142539aea109afaf6fc38`);  
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles)
  setLoading(false);
  setTotalResults(parsedData.totalResults)
  
  console.log(parsedData);
  } 
   
  

    useEffect(() => {
        
  

      fetchData();
      document.title = `${ capitalizeFirstLetter (props.category)} - NewsMonkey`
      

      }, []);

  
      const  capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
     const fetchMoreData = async () => {
                
      const url = (`https://newsapi.org/v2/everything?q=bitcoin&apiKey=976814fa535142539aea109afaf6fc38&page=${page+1}`);  

  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles))
  // setLoading(false);
  setTotalResults(parsedData.totalResults)
  setPage(page+1)
    }
  return (
    
      <div className='container my-3'>

{loading && <Spinner />}

{/* <Spinner/> */}
<h2 className='text-center'>NewsMonkey - { capitalizeFirstLetter (props.category)} </h2>


<InfiniteScroll
          dataLength={ articles.length}
          next={fetchMoreData}
          hasMore= { articles.length!== totalResults}
          loader={<Spinner />}
        >








<div className='row'>

 { articles.map((data) => {

return <div className='col-md-4' key={data.url}>

 <NewsItems  title = {data.title} description = {data.description} urlToImage = {data.urlToImage} newsUrl= {data.url} author = {data.author} date = {data.publishedAt} source = {data.source.name}/>
 
 </div>
 
})}





</div>
</InfiniteScroll>

      


 </div>
     
  )
}

News.defaultProps ={
  country: 'in',
  pageSize: 8,
  category: 'general',  
}
News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
