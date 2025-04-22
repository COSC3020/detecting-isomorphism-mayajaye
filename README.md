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

The worst case would be an isomorphic graph, since it will run through all the steps and both sets of vertices and edges will be equal.

The steps of this algorithm are:
1. Check if $|V_{1}| = |V_{2}|$. $\Theta(1)$
2. Check if the degree counts are equal for graphs 1 and 2. Getting the degree of each node iterates over all the edges, storing the degree count will iterate over $|V|$, and comparing all the degrees will take $|V|$. $\Theta(|V||E|)$
3. Map $V_{1}$ to $V_{2}$. Checking if each $v_2$ is mapped will take $|V|$ since every $v_2$ is mapped once. Getting the degrees of each connected node will take $|V|^{2}|E|$ since we have to run getDegrees inside getEdgeDegrees. Mapping will take $|V|$ since we have to map every node. Overall, this step takes $\Theta(|V|^{2}|E|)$ since that is the $\Theta$ complexity of $(2|V| + |V|^{2}|E|)$
4. Make the remapped graph. $\Theta(|V|+|E|)$
5. For the length of $V_1$, compare all edges. $\Theta(|V||E|)$

The runtime equation is:

$T(n) = 1 + 2(|V||E|) + |V|^{2}|E| + |V| + |E|$

Ignoring the asymptotically insignificant terms, we can conclude that

$T(n) \in \Theta(|V|^{2}|E|)$

#### Sources

I used [this](https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers) to use the sort function on integers.

I used chatGPT to compare the lists of edges with .join(',').

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."