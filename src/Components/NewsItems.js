import React from 'react'

export default function NewsItems(props) {
  return (

    <div className="container text-center">
      <div className="my-3">
        <span className="badge rounded-pill bg-danger"> {props.source} </span>

        <div className="card" style={{ width: "18rem" }}>
          <img src={!props.urlToImage ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : props.urlToImage} className="card-img-top" alt={props.urlToImage} />
          <div className="card-body" style={{ color: "black", backgroundColor: "white" }}>
            <h5 className="card-title">{props.title} <a href={props.url}> </a></h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!props.author ? "Unknown" : props.author} on {new Date(props.date).toGMTString()} </small></p>

            <a href={props.newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
     
    </div>
  )
}


