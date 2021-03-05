import React from "react";
import Article from "../Article/Article";
import CoronaVirus from "../CoronaVirus/CoronaVirus";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";
import ParentProps from "./ParentProps";
import ParentState from "./ParentState";

export default class Parent extends React.Component<ParentProps, ParentState>{

    constructor(props : any){
        super(props) ;
        this.state = {
            currentTab : "top_articles"
        }

    }

    componentDidMount(){}

    handleCurrentTab = (tab : String)=>{
        this.setState({currentTab : tab}) ;
    }

    render(){
        let currentTab = this.state.currentTab ;
        let component = null ;
        if(currentTab == "top_articles"){
            component = <Article />
        }else if(currentTab == "top_stories"){
            component = <Story />
        }else if(currentTab == "covid_19"){
            component = <CoronaVirus />
        }else if(currentTab == "profile"){
            component = <Profile />
        }
        return(
            <React.Fragment>
                <Header tab={this.state.currentTab} onTabChange={this.handleCurrentTab} />
                { currentTab == "top_articles" ? <Article /> : (currentTab == "top_stories") ? <Story /> : (currentTab == "covid_19") ?  <CoronaVirus /> : <Profile /> }
            </React.Fragment>
        );
    }
    
}