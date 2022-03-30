# adopt-me-btholt

<h1>React Capabilities</h1>

<h2>Managing State in Class Components</h2>
<p>Okay, so on this page, notice first we have a loading indicator (this one isn't nice looking but you could put some effort into it if you wanted.) This is a good idea while you're waiting for data to load.</p>
<h3> See Carousel.js </h3>
<h2>---------------------------------</h2>
<p>Add the Carousel component to the Detail page.</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// import at top</span>
<span class="token keyword">import</span> Carousel <span class="token keyword">from</span> <span class="token string">"./Carousel"</span><span class="token punctuation">;</span>

<span class="token comment">// at top of Details function</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> animal<span class="token punctuation">,</span> breed<span class="token punctuation">,</span> city<span class="token punctuation">,</span> state<span class="token punctuation">,</span> description<span class="token punctuation">,</span> name<span class="token punctuation">,</span> images <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>

<span class="token comment">// first component inside div.details</span>
<span class="token operator">&lt;</span>Carousel images<span class="token operator">=</span><span class="token punctuation">{</span>images<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<ul>
<li>defaultProps does exactly what it sounds like: it allows you to set props that a component has by default if they're not furnished by parent. That way we don't have to do detection logic and can just assume they're always there.</li>
</ul>
<p>Let's make it so we can react to someone changing the photo on the carousel.</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// add event listener</span>
  <span class="token function-variable function">handleIndexClick</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token operator">+</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>index
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// above img</span>
<span class="token comment">// eslint-disable-next-line</span>

<span class="token comment">// add to img</span>
onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleIndexClick<span class="token punctuation">}</span>
data<span class="token operator">-</span>index<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></code></pre></div>
<ul>
<li>This is how you handle events in React class components. If it was keyboard handler, you'd do an onChange or onKeyUp, etc. handler.</li>
<li>Notice that the handleIndexClick function is an arrow function. This is because we need the <code class="language-text">this</code> in <code class="language-text">handleIndexClick</code> to be the correct <code class="language-text">this</code>. An arrow function assures that because it will be the scope of where it was defined. This is common with how to deal with event handlers with class components.</li>
<li>The data attribute comes back as a string. We want it to be a number, hence the <code class="language-text">+</code>.</li>
<li>We're doing bad accessibility stuff. But this makes it a lot simpler for learning for now. But don't do this in production.</li>
</ul>