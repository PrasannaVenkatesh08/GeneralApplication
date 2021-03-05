import React from "react";
import CarouselCardProps from "./CarouselCardProps";
import CarouselCardState from "./CarouselCardState";
import Items from "./Items";

export default class CarouselCard extends React.Component<CarouselCardProps, CarouselCardState>{
    
    constructor(props : any){
        super(props) ;
    }

    render(){
        return(
            <React.Fragment>
                <div className="w-100">
                    <div className ="w-50 float-left">
                        <div>
                            <h3>{this.props.cardDataObject.headline.main}</h3>
                        </div>
                        <div>
                            {this.props.cardDataObject.lead_paragraph}
                        </div>
                        <div>
                            Published By : {this.props.cardDataObject.byline.original}
                        </div>
                        <div>
                            Published Date : {this.props.cardDataObject.pub_date}
                        </div>
                        <div>
                            Source : <a href={this.props.cardDataObject.web_url} target="_blank">{this.props.cardDataObject.web_url}</a> 
                        </div>
                    </div>
                    <div className="w-50 float-left">
                        <div className="">
                            {/* <iframe src={this.props.cardDataObject.web_url} width="540" height="300"></iframe> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}