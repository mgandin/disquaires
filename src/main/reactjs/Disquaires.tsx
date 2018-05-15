import * as React from "react";

import axios from 'axios'
import { Disquaire } from "./Disquaire";

interface DisquairesState {
    disquaires: Disquaire[]
}

export class Disquaires extends React.Component<any, DisquairesState> {

    constructor(props: any){
        super(props);
        this.state = { disquaires: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/disquaires")
            .then(response => {
                const disquairesData = response.data.disquaires;
                this.setState({ disquaires: disquairesData });
            })
    }

    render() {
        return (
              <div className="disquaires">
                {  this.state.disquaires.map(disquaire => <div>{disquaire.name}</div>)}
              </div>
            )
    }
}