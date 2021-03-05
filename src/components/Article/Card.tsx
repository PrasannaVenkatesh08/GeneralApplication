import React from "react";
import article from '../../assests/images/article.jpg' ;
import CardProps from "./CardProps";
import CardState from "./CardState";

export default class Card extends React.Component<CardProps, CardState> {
    
    constructor(props:any){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div className="card mb-3 w-100">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={article} className="card-img" alt="Image not available" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.cardData.headline.main}</h5>
                                <p className="card-text">{this.props.cardData.lead_paragraph}</p>
                                <p className="card-text"><small className="text-muted">Published {this.props.cardData.byline.original}</small></p>
                                <p className="card-text"><small className="text-muted">Source <a href={this.props.cardData.web_url} target="_blank">{this.props.cardData.web_url}</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
