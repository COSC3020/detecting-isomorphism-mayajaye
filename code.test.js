// Maya Conway
// code.test.js
// Detecting Isomorphism Unit Tests
// 4-21-25

const assert = require('assert');
const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

function isoTests() {
    //Isomorphic graphs from the lecture slides
    const lectureGraph1 = {
        A: ['C'],
        B: ['C'],
        C: ['A', 'B', 'D'],
        D: ['C', 'E'],
        E: ['D', 'F', 'G'],
        F: ['E', 'G'],
        G: ['E', 'F']
    };
    
    const lectureGraph2 = {
        H: ['I', 'M'],
        I: ['H', 'J', 'M'],
        J: ['I', 'N'],
        K: ['N'],
        L: ['N'],
        M: ['H', 'I'],
        N: ['J', 'K', 'L']
    };

    //Two more isomorphic graphs
    const isoGraph1 = {
        A: ['B', 'C'],
        B: ['A', 'D', 'E'],
        C: ['A', 'F'],
        D: ['B'],
        E: ['B', 'G'],
        F: ['C'],
        G: ['E']
    };

    const isoGraph2 = {
        X: ['Y', 'Z'],
        Y: ['X', 'W', 'V'],
        Z: ['X', 'U'],
        W: ['Y'],
        V: ['Y', 'T'],
        U: ['Z'],
        T: ['V']
    };
    
    //Non-isomporphic graphs (different number of nodes)
    const difNodesGraph1 = {
        A: ['B', 'C'],
        B: ['A', 'D'],
        C: ['A', 'E'],
        D: ['B'],
        E: ['C']
    };

    const difNodesGraph2 = {
        X: ['Y', 'Z'],
        Y: ['X'],
        Z: ['X', 'W'],
        W: ['Z']
    }; 
    
    //Non-isomorphic graphs (different degree counts)
    const difDegsGraph1 = {
        A: ['B', 'C'],
        B: ['A', 'D'],
        C: ['A', 'E'],
        D: ['B'],
        E: ['C']
    };

    const difDegsGraph2 = {
        X: ['Y', 'Z'],
        Y: ['X', 'V'],
        Z: ['X', 'W'],
        W: ['Z'],
        V: ['X', 'W']
    };  

    //Non-isomorphic graphs (same degree counts)
    const nonIsoGraph1 = { //disconnected
        A: ['B', 'C'],
        B: ['A', 'C'],
        C: ['A', 'B'],
        D: ['E', 'F'],
        E: ['D', 'F'],
        F: ['D', 'E']
    };

    const nonIsoGraph2 = { //connected
        A: ['B', 'F'],
        B: ['A', 'C'],
        C: ['B', 'D'],
        D: ['C', 'E'],
        E: ['D', 'F'],
        F: ['E', 'A']
    };
    
    
    
    assert.deepEqual(are_isomorphic(lectureGraph1, lectureGraph2), true, 'Lecture graphs failed');
    assert.deepEqual(are_isomorphic(isoGraph1, isoGraph2), true, 'Isomorphic graphs failed');
    assert.deepEqual(are_isomorphic(difNodesGraph1, difNodesGraph2), false, 'Different |V| graphs failed');
    assert.deepEqual(are_isomorphic(difDegsGraph1, difDegsGraph2), false, 'Different degree graphs failed');
    assert.deepEqual(are_isomorphic(nonIsoGraph1, nonIsoGraph2), false, 'Connected v disconnected graphs failed');
    assert.deepEqual(are_isomorphic(lectureGraph1, isoGraph2), false, 'For fun graphs failed');

}
isoTests();