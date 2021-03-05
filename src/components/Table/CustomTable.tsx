import React from "react";
import MaterialTable from 'material-table';

import TableProps from "./TableProps";
import TableState from "./TableState";
import axios from 'axios';


export default class CustomTable extends React.Component<TableProps, TableState>{

    constructor(props: any) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({ tableData: nextProps.tableData });
    }

    render() {
        console.log(this.state)

        const data = this.state.tableData;
        const detailedPanel = []
        const col = [{
            title: "Country", field: "country",
            cellStyle: {
                color: "blue",
                textDecoration: "underline"
            },
            headerStyle: {
                backgroundColor: '#039be5'
            }
        },
        {
            title: "Tested", field: "tested",
            headerStyle: {
                backgroundColor: '#039be5'
            }
        },
        {
            title: "Infected", field: "infected",
            headerStyle: {
                backgroundColor: '#039be5'
            }
        }, {
            title: "Recovered", field: "recovered",
            headerStyle: {
                backgroundColor: '#039be5'
            }
        },
        {
            title: "Active", 
            headerStyle: {
                backgroundColor: '#039be5'
            },
            render : (rowData : any) => rowData.infected - rowData.recovered - rowData.deceased
        },
        {
            title: "Deceased", field: "deceased",
            headerStyle: {
                backgroundColor: '#039be5'
            }
        }
        ]
        return (
            <React.Fragment>
                <MaterialTable
                    title="Covid-19 Latest Status"
                    data={data}
                    columns={col}
                />
            </React.Fragment>
        )
    }

} 