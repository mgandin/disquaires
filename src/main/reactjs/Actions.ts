export const QUERY_DISQUAIRES = 'QUERY_DISQUAIRES';
export type QUERY_DISQUAIRES = typeof QUERY_DISQUAIRES;

export interface QueryDisquaires {
    type: QUERY_DISQUAIRES;
};

export type QueryAction = QueryDisquaires;

export function queryDisquaires(): QueryDisquaires {
    return {
        type: QUERY_DISQUAIRES
    }
}