# adopt-me-btholt

<h1>React Capabilities</h1>

<h2>React Router</h2>

<p>Here if you get to http://localhost:1234/details/1 you will see the two components at the same time</p>
<h3>Why ?</h3>
<p>React Router does partial matches.</p>
<p>bc the router will match first the "/" route, display it and then it will complete to match /details and display it</p>

<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at top</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Details <span class="token keyword">from</span> <span class="token string">"./Details"</span><span class="token punctuation">;</span>

<span class="token comment">// replace &lt;SearchParams /&gt;</span>
<span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/details/:id"</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Details <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>SearchParams <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<h3>How to prevent that ?</h3>
<p>let's make it match only one path with a component called Switch.</p>
<p>before: see that the order of your components have to be from specific(/details) to general(/), without that you ll see the "SearchParams" always, it seems like react router start matching from the top to the bottom if you are using switch react router will display the first component he matched with.! </p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// replace react-router-dom import</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token comment">// replace jsx</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Router<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Adopt Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/details/:id"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Details <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>SearchParams <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<h3>in Pet.js replace the anchor with link to use the singlePage property of React</h3>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at top</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token comment">// change wrapping &lt;a&gt;</span>
<span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/details/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"pet"</span><span class="token operator">&gt;</span>
  <span class="token punctuation">[</span>…<span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<h3>useParams() Hook</h3>
<p>we can pass the id from Pet to DEtail to display the corresponded Animal</p>
<p>but as a best practice & because we want the user to access the specific animal directly if he puts the '/details/1' we will use UseParams that will give use the params from ReactRouter directly</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Details</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Details<span class="token punctuation">;</span></code></pre></div>