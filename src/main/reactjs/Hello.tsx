import * as React from "react";

import axios from 'axios'

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {

    componentDidMount() {
        axios.get("http://localhost:8081/disquaires")
            .then(response => (console.log(response)))
    }

    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}