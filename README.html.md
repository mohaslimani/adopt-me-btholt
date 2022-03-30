# adopt-me-btholt

<h1>Core React Concepts</h1>

<h2>Handling User Input</h2>
<pre class="language-javascript"><code class="language-javascript">
<span class="token comment">// replace &lt;form&gt;</span>
<span class="token operator">&lt;</span>form
  onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">requestPets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span></code></pre>

<p> preventDefault method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. </p>
<p>Clicking on a "Submit" button, prevent it from submitting a form</p>
<p> here it prevent the page from being refreshed (&sending data form to a script), instead it will requestPets()</p>