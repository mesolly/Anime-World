import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreator from '../state/action-creators'
import Spinner from "./Spinner";
const Body = (props) => {
    const quotes = useSelector(state=>state.quote) ;
    const dispatch = useDispatch() ;
    const {setLoading,setQuote,setProgress} = new bindActionCreators(actionCreator,dispatch) ;
    const loading = useSelector(state=>state.loading) ;
    
    const getQuotes = async() =>{
        setProgress(10) ;
        const url = props.apiKey;
        setLoading(true) ;
        let data = await fetch(url) ;
        setProgress(30) ;
        let ParsedData = await data.json() ;
        setProgress(70) ;
        setQuote(ParsedData) ;
        setLoading(false) ;
        setProgress(100) ;
    }
    useEffect(() => {
        document.body.style.backgroundColor = '#f6d365';
        getQuotes() ;
    }, [])
    
    return (
        <>
        <section className="vh-90 ">
            <div className="container py-5 h-100">
                <div className='container d-flex justify-content-center'>
                    <h1 className='text-center m-5 p-4 display-4'>Random Anime Quotes</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center h-100">
                { loading ?  <Spinner/> :
                    <><div className="col col-xl-10">
                    <div className="card">
                        <div className="card-body py-5">
                        <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                            <div className="carousel-inner pt-2 pb-5">
                                <div className="carousel-item active">
                                <div className="row d-flex justify-content-center">
                                <div className="col-md-8 col-lg-9 col-xl-8">
                                <div className="d-flex">
                                <div className="flex-grow-1 ms-4 ps-3">
                                    <blockquote className="blockquote mb-4">
                                    <p>
                                        <span className="font-italic">{quotes.quote}</span>
                                    </p>
                                    
                                    </blockquote>
                                    <figcaption className="blockquote-footer" style={{marginLeft: '25rem' ,display: 'flex',justifyContent:'end',position: 'absolute' }}>
                                        By {quotes.character} from {quotes.anime}
                                    </figcaption>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="text-center" style={{marginTop: '50px'}}>
                    <button type="button" className="btn btn-primary btn-lg" onClick={getQuotes}>Get Quote</button>
                </div>
                </div></>}
                
                </div>
            </div>
        </section>
        </>
    )
}

export default Body