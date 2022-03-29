# adopt-me-btholt

<h1>Core React Concepts</h1>

<h2>UseEffect</h2>
<p>do a render of this component first so the user can see something then as soon as the render is done, then do something (the something here being an effect.) In our case, we want the user to see our UI first then we want to make a request to the API so we can that initial list of pets.</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// change import at top</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pet <span class="token keyword">from</span> <span class="token string">"./Pet"</span><span class="token punctuation">;</span>

<span class="token comment">// add to the other useStates inside component at top</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>pets<span class="token punctuation">,</span> setPets<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add inside component, beneath all the `useState` setup</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">requestPets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line react-hooks/exhaustive-deps</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">requestPets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://pets-v2.dev-apis.com/pets?animal=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>animal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;location=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>location<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;breed=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>breed<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setPets</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>pets<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// in jsx, under form, inside the larger div</span>
<span class="token punctuation">{</span>
  pets<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pet</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Pet name<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>name<span class="token punctuation">}</span> animal<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>animal<span class="token punctuation">}</span> breed<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>breed<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span>pet<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre></div>

<ul>
<li>We could have actually put requestPets inside of the effect but we're going to use it again here in a sec with the submit button.</li>
<li>the <code class="language-text">[]</code> at the end of the useEffect is where you declare your data dependencies.</li>
<li>You can instead provide which hooks to watch for changes for. In our case, we actually only want it to run once, on creation of the component, and then to not run that effect again. (we'll do searching later via clicking the submit button) You can accomplish this only-run-on-creation by providing an empty array.</li>
<li>React wants to know <em>when</em> to run that effect again. You don't give it data dependencies, it assumes any time any hook changes that you should run the effect again. This is bad because that would mean any time setPets gets called it'd re-run render and all the hooks again. See a problem there? It'd run infinitely since requestPets calls setPets.</li>
<li>The <code class="language-text">// eslint-disable-line react-hooks/exhaustive-deps</code> tells eslint to shut up about this one run on this one line. Why? Because eslint tries to help you with you the data dependencies rule by watching for anything that <em>could</em> change. In this case, in theory the function could change but we know it's not important. You'll end up silencing this rule a fair bit.</li>
</ul>