import * as React from "react";

import axios from 'axios'
import { Disquaire } from "./Disquaire"
import { DisquairesState} from "./State"
import { queryDisquaires,QueryAction } from "./Actions"
import { connect, Dispatch } from 'react-redux';

export interface DisquairesProps {
  disquaires?: Disquaire[]
  onQuery?: () => void;
}

function Disquaires({ disquaires, onQuery }: DisquairesProps) {
  return (
            <div className="disquaires">
              {  disquaires.map(disquaire => <div><div>{disquaire.name}</div><img src={disquaire.image} /></div>)}
            </div>
          )
}

export function mapStateToProps({ disquaires }: DisquairesState) {
  return {
    disquaires
  }
}

export function mapDispatchToProps(dispatch: Dispatch<QueryAction>) {
  return {
    onQuery: () => dispatch(queryDisquaires()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Disquaires);