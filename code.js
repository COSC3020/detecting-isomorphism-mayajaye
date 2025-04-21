//Maya Conway
//code.js
//Detecting Isomorphism
//4-21-25

function are_isomorphic(graph1, graph2) {
    function getDegree(graph, node) {
        let deg = 0;
        for (let i = 0; i < graph[node].length; i++) {
            deg++;
        }
        return deg;
    }

    //store the degree counts of both graphs so we can compare them
    function getAllDegrees(graph) {
        let degCounts = {};
        for (let node in graph) {
            let deg = getDegree(graph, node);
            if (!(deg in degCounts)) degCounts[deg] = 0;
            degCounts[deg] += 1;            
        }
        return degCounts;
    }

    //if the number of nodes is not equal, the graphs are not isomorphic (makes the function onto)
    if (Object.keys(graph1).length !== Object.keys(graph2).length) return false;

    //if the degree counts in graph1 do not match the degree counts in graph2, the graphs are not isomorphic
    let degs1 = getAllDegrees(graph1);
    let degs2 = getAllDegrees(graph2);
    for (let degree in degs1) {
        if (degs1[degree] !== degs2[degree]) return false;
    }
    
    //get the degrees of any edges a node has and put them in a sorted list
    function getEdgeDegrees(graph, node) {
        let degrees = [];
        for (let i = 0; i < graph[node].length; i++) degrees.push(getDegree(graph, graph[node][i]));
        degrees.sort(function(a, b) {return a - b;}); //convert the values to strings so I can use the sort function
        return degrees;
    }

    //remap graph1 to graph2 based on node degrees and their edges degrees
    let mapped = []; //keep track of mapped nodes (makes the function one to one)
    let renameMap = {}; //store the mappings from v1 to v2

    for (let v1 in graph1) {
        let edgeDegs1 = getEdgeDegrees(graph1, v1).join(','); //get a sorted list of v1's edges so we can compare

        for (let v2 in graph2) {
            if (mapped.includes(v2)) continue; //if v2 is already mapped, skip it
            let edgeDegs2 = getEdgeDegrees(graph2, v2).join(','); //get a sorted list of v2's edges so we can compare

            //if the nodes' degrees and their edges degrees are equal, map v1 to v2
            if (getDegree(graph1, v1) == getDegree(graph2, v2) && edgeDegs1 == edgeDegs2) {
                renameMap[v1] = v2;
                mapped.push(v2);
                break;
            }
        }
    }

    //build the remapped graph1 so we can check if it is equal to graph2
    let newGraph1 = {};
    for (let v1 in graph1) {
        let newv1 = renameMap[v1];
        newGraph1[newv1] = []; //adjacency list row for renamed v1
    
        //rename any edges that v1 has and add them to the new adjacency list
        for (let i = 0; i < graph1[v1].length; i++) newGraph1[newv1].push(renameMap[graph1[v1][i]]);
    }   

    //sort the nodes of the remapped graph alphabetically so we can compare them to the nodes of the original graph2
    let V1 = Object.keys(newGraph1).sort();

    for (let i = 0; i < V1.length; i++) { //check that the edges of each node are the same on each graph
        let edges1 = newGraph1[V1[i]].slice().sort();
        let edges2 = graph2[V1[i]].slice().sort();
        if (edges1.join(',') !== edges2.join(',')) return false; //compare a sorted list of each graph's edges
    }
    
    //if the graphs are equal after remapping, they are isomorphic
    return true;
}