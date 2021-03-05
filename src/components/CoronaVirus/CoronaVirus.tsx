import React from "react";
import CoronaVirusProps from "./CoronaVirusProps";
import CoronaVirusState from "./CoronaVirusState";
import axios from 'axios';
import CovidMS from "./CovidMS";
import CustomTable from "../Table/CustomTable";

export default class CoronaVirus extends React.Component<CoronaVirusProps, CoronaVirusState>{

    constructor(props: any) {
        super(props);
        this.fetchCovidData.bind(this) ;
        this.state = {
            covidData : [] 
        }
    }

    fetchCovidData() {
        if(this.state.covidData.length == 0){
            axios.get(CovidMS.apifyCovidURI)
            .then(res => {
                var data = res.data ;
                this.setState({covidData : data}) ;
            });
        }
    }

    componentDidMount(){
        this.fetchCovidData(); 
    }

    render() {
        return (
            <React.Fragment>
                
                <CustomTable tableData={this.state.covidData} />
            </React.Fragment>
        );
    }

}