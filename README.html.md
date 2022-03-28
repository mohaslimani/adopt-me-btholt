# adopt-me-btholt

<h2>Components</h2>
<blockquote>
<p>🚨 You will be seeing a console warning <code class="language-text">Warning: Each child in a list should have a unique "key" prop.</code> in your browser console. React's dev warnings are trying to help your code run faster. Basically React tries to keep track of components are swapped in order in a list and it does that by you giving it a unique key it can track. If it sees two things have swapped, it'll just move the components instead of re-rendering.</p>
</blockquote>

<li>In <code class="language-text">createElement</code>, the last two parameters are optional. Since Pet has no props or children (it could, we just didn't make it use them yet) we can just leave them off.</li>