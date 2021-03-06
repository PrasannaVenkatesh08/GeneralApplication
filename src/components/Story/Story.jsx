import React from "react";
import StoryProps from "./StoryProps";
import StoryState from "./StoryState";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import axios from "axios";
import API_URL from "../Common/API_URL";
import CardStory from "./CardStory";
import Loader from "react-loader-spinner";


export default class Story extends React.Component {

    tabList = ["arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "t_magazine",
        "travel",
        "upshot",
        "us",
        "world",];
    constructor(props) {
        super(props);
        this.state = {
            loader : false,
            currentList: [],
            currentTab: "arts",
            arts: [],
            automobiles: [],
            books: [],
            business: [],
            fashion: [],
            food: [],
            health: [],
            home: [],
            insider: [],
            magazine: [],
            movies: [],
            nyregion: [],
            obituaries: [],
            opinion: [],
            politics: [],
            realestate: [],
            science: [],
            sports: [],
            sundayreview: [],
            technology: [],
            theater: [],
            t_magazine: [],
            travel: [],
            upshot: [],
            us: [],
            world: [],
            visible: false
        }

    }

    componentDidMount() {
        this.fetchContent("arts");
    }

    handleVisible() {
        this.setState({ visible: !this.state.visible });
    }

    fetchContent(tabName) {
        var listOfData = [];
        this.setState({loader:true})
        listOfData = this.state[tabName];
        if (listOfData.length == 0) {
            axios.get(API_URL.story_Url + tabName + API_URL.apiKEy)
                .then(res => {
                    var data = res.data;
                    this.setState({ [tabName]: data.results, currentList: data.results, currentTab: [tabName] });
                })
        } else {
            this.setState({ currentTab: [tabName], currentList: this.state[tabName] ,loader: false});
        }
    }

    render() {
        var sideBarContent = [];
        sideBarContent = this.tabList.map(data => {
            return <li><a className="text-capitalize float-left" onClick={() => this.fetchContent(data)}>{data}</a></li>;
        })
        var storyList = [];
        var tabName = this.state.currentTab;
        storyList = this.state.currentList;
        var cards = [];
        cards = storyList.map(data => {
            return <CardStory cardData={data} />;
        })
        return (
            <React.Fragment>
                
                <Sidebar position="left" visible={this.state.visible} onHide={() => this.handleVisible()}>
                    <h4>Select Topic</h4>
                    <ul>
                        {sideBarContent}
                    </ul>
                </Sidebar>
                <div className="text-left mt-2 mb-2 w-100" >
                    <a className="" onClick={() => this.handleVisible()}>Click here to change topic</a>
                </div>
                <div className="w-100">
                    <div className="w-100">
                        <div className="w-75 marginLeft_12">
                            <h2 className="titlePage text-capitalize">Topic : {tabName}</h2>
                        </div>
                    </div>
                    <div className="w-75 marginLeft_12 mt-4">
                        {cards}
                    </div>
                </div>
            </React.Fragment>
        )
    }


}