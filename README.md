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

I made this long and weird algorithm but I'm not sure if I'm fully testing for isomorphism. The idea of my code is to:
1. Check if $|V_{1}| = |V_{2}|$. If not, the function can't be onto and the graphs can't be isomorphic
2. Check if the degree counts are equal for graphs 1 and 2. If not, they are not isomorphic
3. Map $V_{1}$ to $V_{2}$ with a function that finds nodes of equal degree from v1 and v2, checks that v2 isn't already mapped, checks if the nodes connected to v1 have the same degree as the nodes connected to v2, and maps v1 to v2 if so

I haven't found any test cases that fail with my algorithm, but I'm still not confident that I can move on to my analysis
#### Sources

I used [this](https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers) to use the sort function on integers.

I used chatGPT to compare the lists of edges with .join(',').

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."