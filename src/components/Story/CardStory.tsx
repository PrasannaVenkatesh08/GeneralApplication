import React from "react";
import CardStoryProps from "./CardStoryProps";
import CardStoryState from "./CardStoryState";

export default class CardStory extends React.Component<CardStoryProps, CardStoryState>{

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="card mb-3 w-100 pt-4 pb-4" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.cardData.multimedia[0].url} className="card-img card_image"  alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.cardData.title}</h5>
                                <p className="card-text">{this.props.cardData.abstract}</p>
                                <p className="card-text"><small className="text-muted"> Published {this.props.cardData.byline}</small></p>
                                <p className="card-text"><small className="text-muted"> Source <a href={this.props.cardData.url} target="_blank">{this.props.cardData.url}</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}