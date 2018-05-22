import * as React from "react";

import axios from 'axios'
import { Disquaire } from "./Disquaire"
import { DisquairesState} from "./State"
import { Actions,FetchPostsSuccess, fetchDatas } from "./Actions"
import { connect, Dispatch } from 'react-redux';

export interface DisquairesProps {
  disquaires?: Disquaire[],
  dispatch?: Dispatch<FetchPostsSuccess>;
}


export class Disquaires extends React.Component<DisquairesProps, DisquairesState> {

    render() {
        return (
            <div className="disquaires">
              {  this.props.disquaires.map(disquaire => <div><div>{disquaire.name}</div><img src={disquaire.image} /></div>)}
            </div>
        )
    }
}

export function mapStateToProps({ disquaires }: DisquairesState) {
  return {
    disquaires
  }
}

export function mapDispatchToProps(dispatch: Dispatch<FetchPostsSuccess>) {
  return {
    onQuery: () => dispatch(fetchDatas()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Disquaires);