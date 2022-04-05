# adopt-me-btholt

<h1>Special Case React Tools</h1>

<h2>Error Boundaries</h2>
<p>CAtching Errors</p>
<p>This will also catch 404s on our API if someone give it an invalid ID!</p>
<p>A component can only catch errors in its children, so that's important to keep in mind. It cannot catch its own errors. Let's go make a wrapper to use on Details.js. Make a new file called ErrorBoundary.js</p>
<p>see ErrorBoundary.js</p>
<ul>
<li>Now anything that is a child of this component will have errors caught here. Think of this like a catch block from try/catch.</li>
<li>A static method is one that can be called on the constructor. You'd call this method like this: <code class="language-text">ErrorBoundary.getDerivedStateFromError(error)</code>. This method must be static.</li>
<li>If you want to call an error logging service, <code class="language-text">componentDidCatch</code> would be an amazing place to do that. I can recommend <a href="https://azure.microsoft.com/en-us/services/monitor/?WT.mc_id=reactintro-github-brholt">Azure Monitor</a>, <a href="https://sentry.io/">Sentry</a>, and <a href="https://trackjs.com/">TrackJS</a>.</li>
</ul>

<h3>in Details.js</h3>
<ul>
<li>Now this is totally self contained. No one rendering Details has to know that it has its own error boundary. I'll let you decide if you like this pattern or if you would have preferred doing this in App.js at the Router level. Differing opinions exist.</li>
<li>We totally could have made ErrorBoundary a bit more flexible and made it able to accept a component to display in cases of errors. In general I recommend the "WET" code rule (as opposed to <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a>, lol): Write Everything Twice (or I even prefer Write Everything Thrice). In this case, we have one use case for this component, so I won't spend the extra time to make it flexible. If I used it again, I'd make it work for both of those use cases, but not <em>every</em> use case. On the third or fourth time, I'd then go back and invest the time to make it flexible.</li>
</ul>
<p>Let's make it redirect automatically after five seconds. We could do a set timeout in the <code class="language-text">componentDidCatch</code> but let's do it with <code class="language-text">componentDidUpdate</code> to show you how that works.</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// top</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> Redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token comment">// add redirect</span>
state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// under componentDidCatch</span>
<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// first thing inside render</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Redirect to<span class="token operator">=</span><span class="token string">"/"</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  …
<span class="token punctuation">}</span></code></pre></div>

<ul>
<li><code class="language-text">componentDidUpdate</code> is how you react to state and prop changes with class components. In this case we're reacting to the state changing. You're also passed the previous state and props in the paremeters (which we didn't need) in case you want to detect what changed.</li>
<li>Rendering Redirect components is how you do redirects with React Router. You can also do it progamatically but I find this approach elegant.</li>
</ul>

<h2>i couldnt test anything here away from changing states from reactDevTools component to get the renders i want or to auto redirect the page</h2>