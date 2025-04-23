# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The steps of this algorithm are:
1. Check if $|V_{1}| = |V_{2}|$. $\Theta(1)$
2. Check if the degree counts are equal for graphs 1 and 2. Getting the degree of each node iterates over all the edges, storing the degree count will iterate over $|V|$, and comparing all the degrees will take $|V|$. $\Theta(|V||E|)$
3. Generate all permutations. This will always generate $|V|!$ permutations. $\Theta(|V|!)$
4. For loop over all permutations on the worst case. $\Theta(|V|!)$
    1. Rename each node. This will take $|V|$ since each node will be mapped once.
    2. Make the remapped graph. $\Theta(|V|+|E|)$
    3. For the length of $V_1$, compare all edges. $\Theta(|V||E|)$
3. Return false if no match found. $\Theta(1)$

The runtime equation is:

$T(n) = 1 + (|V||E|) + |V|! + (|V|!(|V| + |V| + |E| + |V||E|)) + 1$

$= 1 + (|V||E|) + |V|! + 2|V|!|V| + |V|!|E| + |V|!|V||E| + 1$

Ignoring the asymptotically insignificant terms, we can conclude that

$T(n) \in \Theta(|V|!|V||E|)$

Though altering my code to store and test the possible permutations of V2 based on degree sequence would be generally more efficient, the worst case complexity would be the same as generating all permutations since graphs with the same degree sequence for each node would have |V|! permutations. So, for this assignment I ended up just doing two checks then testing all permutations of graph2 against graph1. 

#### Sources

I used [this](https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers) to use the sort function on integers.

I used chatGPT to compare the lists of edges with .join(',').

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."