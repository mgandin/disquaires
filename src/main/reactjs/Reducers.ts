import { QueryAction } from "./Actions"
import { DisquairesState} from "./State"
import axios from 'axios'

export function query(state: DisquairesState, action: QueryAction): DisquairesState {
    return state;
}
