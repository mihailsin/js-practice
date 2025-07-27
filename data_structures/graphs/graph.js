class Graph {
    #nodes;
    constructor() {
        this.#nodes = {};
    }

    addNode(node) {
        this.#nodes[node] = [];
        return this;
    }

    addEdge(sourceNode, destinationNode) {
        if (!this.#nodes[sourceNode] || !this.#nodes[destinationNode]) {
            // невозможно добавлять грани к несуществующим вершинам
            return;
        }

        if (!this.#nodes[sourceNode].includes(destinationNode)) {
            !this.#nodes[sourceNode].push(destinationNode);
        }

        if (!this.#nodes[destinationNode].includes(sourceNode)) {
            !this.#nodes[destinationNode].push(sourceNode);
        }
    }

    get nodes() {
        return this.#nodes;
    }
}

/**
    A - B      C 
    |   | \    |
    D - E -F - G
 */
const graph = new Graph();

// add nodes;
graph.addNode('A').addNode('B').addNode('C').addNode('D').addNode('E').addNode('F').addNode('G');

// graph is expected to have 7 nodes
console.log(graph.nodes);
console.log(Object.keys(graph.nodes).length === 7);

// add nodes
graph.addEdge('B', 'A');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'D');
graph.addEdge('E', 'F');
graph.addEdge('D', 'A');
graph.addEdge('F', 'G');
graph.addEdge('G', 'C');
console.log(graph.nodes);
