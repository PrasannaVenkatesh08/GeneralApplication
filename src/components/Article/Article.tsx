import React from "react";
import ArticleProps from "./ArticleProps";
import ArticleState from "./ArticleState";
import axios from 'axios';
import API_URL from "../Common/API_URL";
import Card from "./Card";

export default class Article extends React.Component<ArticleProps, ArticleState>{


    constructor(props: any) {
        super(props);
        this.state = {
            articleData: [],
            searchArticle : ""
        }
        this.searchArticle.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        if (this.state.articleData.length == 0) {
            axios.get(API_URL.article_Url)
                .then(res => {
                    var data = res.data;
                    this.setState({ articleData: data.response.docs });
                })
        }
    }

    handleSearch(e:any){
        if (e.key === "Enter") {
            this.searchArticle() ;
        }
    }

    searchArticle(){
        axios.get(API_URL.article_Url + "&q="+this.state.searchArticle)
            .then(res => {
                var data = res.data;
                this.setState({ articleData: data.response.docs });
            })
    }

    handleSearchText(e : any){
        this.setState({searchArticle : e.target.value}) ;
    }

    render() {
        var cards = [];
        cards = this.state.articleData.map(obj => {
            return <Card key={obj.web_url} cardData={obj} />
        })
        if( cards.length == 0 ){
            cards.push(<div className="w-100 text-center input-group" style={{marginLeft: '38%'}}><h3>No Article Found</h3></div>) ;
        }
        return (
            <React.Fragment>
                <div className="w-100  mt-3">
                    <div className="w-75 marginLeft_12">
                        <h2 className="text-left titlePage">Below are today's latest articles from The New York Times </h2>
                        <p className="card-text text-left"><small className="text-muted">If you want to read the latest articles but dont know where to start, this page will help you!!!</small></p>
                    </div>
                </div>
                <div className="w-100 ">
                    <div className="w-75 marginLeft_12 mt-4 ">
                        <div className="w-50 float-right input-group mb-2">
                            <input type="text" className="form-control rounded w-75 mr-2" placeholder="Search Article" aria-label="Search"
                                aria-describedby="search-addon" value={this.state.searchArticle} onChange={this.handleSearchText.bind(this)} onKeyPress={this.handleSearch.bind(this)} />
                            <button type="button" className="btn btn-outline-primary" onClick={this.searchArticle}>search</button>
                        </div>
                    </div>
                    <div className="w-75 marginLeft_12 ">
                        {cards}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}