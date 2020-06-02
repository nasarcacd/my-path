interface Nodes extends Node {};

interface Node {
    percentage: number,
    title: string,
    slug: string,
    nodes: Nodes[]
}


export default Node;

