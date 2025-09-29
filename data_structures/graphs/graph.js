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
            this.#nodes[sourceNode].push(destinationNode);
        }

        if (!this.#nodes[destinationNode].includes(sourceNode)) {
            this.#nodes[destinationNode].push(sourceNode);
        }
    }

    /**
        1) BFS — Breadth-First Search (по ширине)
        Что делает: посещает вершины слоями: сначала все соседи стартовой вершины, затем соседи соседей и т.д.
        Когда использовать: поиск кратчайшего пути в невзвешенном графе (минимум рёбер), поиск по уровням, проверка связности.
     */

    pathBFS(sourceNode, destinationNode) {
        const queue = [sourceNode];
        const visited = [];

        visited.push(sourceNode);

        let current;
        while (queue.length) {
            current = queue.shift();

            if (current === destinationNode) {
                // мы "пришли" к искомому узлу. значит такой путь существует
                return true;
            } else {
                this.#nodes[current].forEach((neighbor) => {
                    if (!visited.includes(neighbor)) {
                        visited.push(neighbor);
                        queue.push(neighbor);
                    }
                });
            }
        }

        return false;
    }

    /**
    2) DFS — Depth-First Search (по глубине)
    Что делает: идёт глубоко по ветви, затем откатывается (стек/рекурсия).
    Когда использовать: обход всего графа, поиск компоненты, проверка на наличие цикла, топологическая сортировка (на DAG), задачи backtracking.
     */
    pathDFS(sourceNode, destinationNode, visited = ['A', 'B', 'E', 'D']) {
        visited.push(sourceNode);

        const neighbors = this.#nodes[sourceNode]; // [ 'E', 'A' ]
        neighbors.forEach((node) => {
            if (!visited.includes(node)) {
                if (node === destinationNode) {
                    return true;
                } else {
                    pathDFS(node, destinationNode, visited);
                }
            }
        });

        return false;
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

const path = graph.pathBFS('A', 'Z');
console.log(path);
