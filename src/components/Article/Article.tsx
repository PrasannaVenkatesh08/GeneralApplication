import React from "react";
import ArticleProps from "./ArticleProps";
import ArticleState from "./ArticleState";
import axios from 'axios' ;
import API_URL from "../Common/API_URL";
import Card from "./Card";

export default class Article extends React.Component<ArticleProps, ArticleState>{


    constructor(props: any){
        super(props) ;
        this.state = {
            articleData : []
        }
    }

    componentDidMount(){
        this.fetchData() ;
    }

    fetchData(){
        if( this.state.articleData.length == 0) {
            axios.get(API_URL.article_Url)
            .then( res =>{
                var data = res.data;
                this.setState({ articleData: data.response.docs });
            })
        }
    }

    render(){
        var cards = [] ;
        cards = this.state.articleData.map( obj=>{
            return <Card key={obj.web_url} cardData={obj}/>
        })
        return( 
            <React.Fragment>
                <div className="w-100">
                    <div className="w-75 marginLeft_12 mt-4">
                        {cards}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}