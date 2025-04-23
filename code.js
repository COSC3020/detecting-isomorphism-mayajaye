//Maya Conway
//code.js
//Detecting Isomorphism
//4-23-25

function are_isomorphic(graph1, graph2) {
    function getDegree(graph, node) {
        return graph[node].length;
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

    //if the number of nodes is not equal, the graphs are not isomorphic
    if (Object.keys(graph1).length !== Object.keys(graph2).length) return false;

    //if the degree counts in graph1 do not match the degree counts in graph2, the graphs are not isomorphic
    let degs1 = getAllDegrees(graph1);
    let degs2 = getAllDegrees(graph2);
    for (let degree in degs1) {
        if (degs1[degree] !== degs2[degree]) return false;
    }

    function swap(arr, i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    //permutation getter using heaps algorithm from my brute force sort
    function* permutations(k, arr) {
        if (k <= 1) {
            yield arr;
        } else {
            yield* permutations(k - 1, arr);
            for (let i = 0; i < k - 1; i++) {
                if (k % 2 === 0) swap(arr, i, k - 1);
                else swap(arr, 0, k - 1);
                yield* permutations(k - 1, arr);
            }
        }
    }

    let nodes1 = Object.keys(graph1);
    let nodes2 = Object.keys(graph2);

    //remap graph1 to all permutations of graph2 until one matches
    for (let perm of permutations(nodes2.length, nodes2)) {
        let renameMap = {};
        for (let i = 0; i < nodes1.length; i++) {
            renameMap[nodes1[i]] = perm[i];
        }

        //remap v1 for the current permutation
        let newGraph1 = {};
        for (let v1 in graph1) {
            let remapped = [];
            for (let i = 0; i < graph1[v1].length; i++) {
                remapped.push(renameMap[graph1[v1][i]]);
            }
            newGraph1[renameMap[v1]] = remapped; //adjacency list row for renamed v1
        }       
        

        //check that the edges of each node are the same on each graph
        let V1 = Object.keys(newGraph1);
        let match = true;
        for (let i = 0; i < nodes1.length; i++) {
            let edges1 = newGraph1[V1[i]].sort();
            let edges2 = graph2[V1[i]].sort();
            if (edges1.join(',') !== edges2.join(',')) { //compare a sorted list of each graph's edges
                match = false;
                break;
            }
        }

        //if the graphs are equal after remapping, they are isomorphic
        if (match) return true;
        
    }

    return false;
}