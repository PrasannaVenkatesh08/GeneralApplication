import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import news_icon from "./../../assests/images/news_icon.png"
import HeaderProps from "./HeaderProps";
import HeaderState from "./HeaderState";

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: any) {
        super(props);
    }

    handleClickHeader(type: String) {
        this.props.onTabChange(type);
    }

    render() {
        var tab = this.props.tab ;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" >
                        <img src={news_icon} alt="" width="30" height="24" className="d-inline-block align-top mt-1 mr-2" />Update YourSelf</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className= {(tab == 'top_articles') ? 'nav-item active' :'nav-item'}>
                                <a className="nav-link" onClick={this.handleClickHeader.bind(this, 'top_articles')} >Top Articles</a>
                            </li>
                            <li className= {(tab == 'top_stories') ? 'nav-item active' :'nav-item'}>
                                <a className="nav-link" onClick={this.handleClickHeader.bind(this, 'top_stories')} >Top Stories</a>
                            </li>
                            <li className= {(tab == 'covid_19') ? 'nav-item active' :'nav-item'}>
                                <a className="nav-link" onClick={this.handleClickHeader.bind(this, 'covid_19')} >Covid-19</a>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <Button onClick={this.handleClickHeader.bind(this, 'profile')}><AccountCircle /></Button>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}