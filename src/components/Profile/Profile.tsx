import React from "react";
import ProfileProps from "./ProfileProps";
import ProfileState from "./ProfileState";

export default class Profile extends React.Component<ProfileProps, ProfileState> {
    
    constructor(props: any){
        super(props) ;
    }

    render(){
        return(
            <React.Fragment>
                Inside Profile
            </React.Fragment>
        )
    }

}