import React from "react";
import ParentCarouselProps from "./ParentCarouselProps";
import ParentCarouselState from "./ParentCarouselState";
import axios from 'axios';
import API_URL from "./API_URL";
import CustomeCarousel from "./CustomCarousel";
import BGImage from '../../assests/images/bgImage.jpg'
import { Ballot } from "@material-ui/icons";


export default class ParentCarousel extends React.Component<ParentCarouselProps, ParentCarouselState>{


    constructor(props: any) {
        super(props);
        this.state = {
            articleData: [],
            storyData : []
        }
    }

    componentDidMount() {
        this.fetchData() ;
    }

    fetchData() {
        if (this.state.articleData.length == 0) {
            axios.get(API_URL.articleData)
                .then(res => {
                    var data = res.data;
                    this.setState({ articleData: data.response.docs });
                });
        }
        if( this.state.storyData.length  == 0 ){
            axios.get(API_URL.storyData)
                .then( res => {
                    var data = res.data ;
                    this.setState({storyData : data.response.docs}) ;
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="w-100">
                        <div className="width_10 float-left">
                            <h2 className="headerFont mt-1"><b>Article</b></h2>
                        </div>
                        <div className="w-75 float-left">
                            <div className="w-100 text-left subHeaderFont" >
                                If you’re one of countless people who don’t have a perfect website to read latest articles, here it is...
                            </div>
                            <div className="w-100 text-left">
                                source : <a href="https://www.nytimes.com/" target="_blank" >https://www.nytimes.com/</a>
                            </div>
                        </div>

                    </div>
                    <CustomeCarousel cardData={this.state.articleData} />
                </div>
                <div style={{ backgroundImage: BGImage }}>
                    <h3>Top Stories</h3>
                    <CustomeCarousel cardData={this.state.storyData} />
                </div>
                
            </React.Fragment>
        )
    }
}