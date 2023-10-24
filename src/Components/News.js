import React, {useState,useEffect} from 'react';
// import axios from "axios";
import NewsItems from './NewsItems';
// import Sample from './Sample.json'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)


    const [page, setPage] = useState(1);
    // const [totalResults, setTotalResults] = useState(0);
    
  const fetchData = async()=>{
  const url = (`https://newsapi.org/v2/everything?q=bitcoin&apiKey=976814fa535142539aea109afaf6fc38`);  
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles)
  setLoading(false);
  setTotalResults(parsedData.totalResults)
  // console.log(fetchData);
  console.log(parsedData);
  } 
   
  

    useEffect(() => {
        
      // fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-04-23&sortBy=publishedAt&apiKey=976814fa535142539aea109afaf6fc38")
      // .then(response => {
      //   return response.json()
      // })
      // .then(data => {
      //   setArticles(data.articles)
      //   console.log(data);
      // })

      fetchData();
      document.title = `${ capitalizeFirstLetter (props.category)} - NewsMonkey`
      

      }, []);

      // useEffect(() => {

        // const fetchData = async ()=>{
        //   const response = await fetch('https://newsapi.org/v2/everything?q=cricket&from=2023-04-21&sortBy=publishedAt&apiKey=976814fa535142539aea109afaf6fc38')
        //       const data = await response.json();
        //       let parsedData = await data.json();

              // console.log(data);
              //  setArticles(data.articles)
    //            setArticles(parsedData.articles);
    //            setTotalResults(parsedData.totalResults)

		// setPage(page + 1);
               
    //     }

      //   fetchData()

       
      // }, [])

      // const divideIntoColumns = (articles, columnCount) => {
      //   const dividedData = [];
      //   for (let i = 0; i < columnCount; i++) {
      //     dividedData.push([]);
      //   }
      //   articles.forEach((data, index) => {
      //     dividedData[index % columnCount].push(data);
      //   });
      //   return dividedData;
      // };
    
      // const columns = divideIntoColumns(articles, 2); // Change the column count as needed

    

      // const handlePrevClick = async ()=>{
      //  console.log("Previous");
  //     const url = ("https://newsapi.org/v2/everything?q=cricket&from=2023-04-25&sortBy=publishedAt&apiKey&page=1")  
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // setArticles(parsedData.articles)
  // setPage(page-1)
      // }

      // const handleNextClick = async()=>{
        // console.log("Next");
  //       const url = (`https://newsapi.org/v2/everything?q=cricket&from=2023-04-25&sortBy=publishedAt&apiKey&${page+1}`)  
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // setArticles(parsedData.articles)
  // setPage(page+1)
      // }
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



{/* <div className='container d-flex justify-content-between'>

`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}business&apiKey=976814fa535142539aea109afaf6fc38&pageSize=${props.pageSize}`

<button type="button" className="btn btn-dark" onClick={handlePrevClick}>Previous</button>
<button type="button" className="btn btn-dark" onClick={handleNextClick}>Next</button> */}


{/* </div> */}

{/* {articles.map(article => {

return(
  <NewsItems key={article.url} title = {article.title.slice(0,28)} description = {article.description.slice(0,83)} urlToImage = {article.urlToImage} newsUrl = {article.url} />
  
)
})} */}

</div>
</InfiniteScroll>

{/* <div classNameNameName="col-md-3" > */}

{/* {articles.map(data => {

return(

  <NewsItems key={data.url} title = {data.title} description = {data.description} urlToImage = {data.urlToImage} newsUrl= {data.url} />
)
})} */}
  
{/* {articles.map(article => {

return(
  <NewsItems  key={article.url} title = {article.title.slice(0,28)} description = {article.description.slice(0,83)} urlToImage = {article.urlToImage} newsUrl = {article.url} />
  
)
})} */}

{/* </div> */}
{/* <div classNameNameName="col-md-3" > */}


{/* {articles.map(data => {

return(

  <NewsItems key={data.url} title = {data.title} description = {data.description} urlToImage = {data.urlToImage} newsUrl= {data.url} />
)
})} */}

{/* {articles.map(article => {

return(
  <NewsItems key={article.url} title = {article.title.slice(0,28)} description = {article.description.slice(0,83)} urlToImage = {article.urlToImage} newsUrl= {article.url} />
  
)
})} */}

{/* </div> */}
        


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
