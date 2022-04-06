# adopt-me-btholt

<p>
  Some Notes:<br />
  in Carousel.js<br />
  Operator + returns a value for objects which have implemented method valueOf
  <br />
  here convert string to number<br />
  <br />
  we used the attribut data-* because it behaves like a costume attribute that
  can be accessed with dataset.*<br />
  in our example we have data-index that will be accessed with dataset.index<br />
</p>

<h1>Special Case React Tools</h1>

<h2>Context</h2>
<p>
  So here we go. What is context? Context is like state, but instead of being
  confined to a component, it's global to your application. It's
  application-level state. This is dangerous. Avoid using context until you
  <em>have</em> to use it.
</p>

<p>
  Context (mostly) replaces Redux. Well, typically. It fills the same need as
  Redux. I really can't see why you would need to use both. Use one or the
  other.
</p>

<h3>see ThemeContext.js</h3>

<p>
  <code class="language-text">createContext</code> is a function that returns an
  object with two React components in it: <br />a Provider and a Consumer.
</p>
<p>
  A Provider is how you scope where a context goes. A context will only be
  available inside of the Provider. You only need to do this once.
</p>
<p>
  A Consumer is how you consume from the above provider. A Consumer accepts a
  function as a child and gives it the context which you can use. We won't be
  using the Consumer directly: a function called
  <code class="language-text">useContext</code> will do that for us.
</p>

<h3>in App.js</h3>
<pre
  class="language-javascript"
><code class="language-javascript"><span class="token comment">// import useState and ThemeContext</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">"./ThemeContext"</span><span class="token punctuation">;</span>

<span class="token comment">// top of App function body</span>
<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"darkblue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// wrap the rest of the app</span>
<span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>…<span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre>

<ul>
  <li>
    We're going to use the <code class="language-text">useState</code> hook
    because theme is actually going to be kept track of like any other piece of
    state: it's not any different. You can think of context like a wormhole:
    whatever you chuck in one side of the wormhole is going to come out the
    other side.
  </li>
  <li>
    You have to wrap your app in a <code class="language-text">Provider</code>.
    This is the mechanism by which React will notify the higher components to
    re-render whenever our context changes. Then whatever you pass into the
    value prop (we passed in the complete hook, the value and updater pair) will
    exit on the other side whenever we ask for it.
  </li>
  <li>
    Note that the theme will only be available <em>inside</em> of this provider.
    So if we only wrapped the
    <code class="language-text">&lt;Details&gt;</code> route with the Provider,
    that context would not be available inside of
    <code class="language-text">&lt;SearchParams /&gt;</code>.
  </li>
  <li>
    Side note: if your context is <em>read only</em> (meaning it will
    <em>never change</em>) you actually can skip wrapping your app in a
    Provider.
  </li>
</ul>

<h3>in SearchParams.js</h3>
<pre
  class="language-javascript"
><code class="language-javascript"><span class="token comment">// import at top</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">"./ThemeContext"</span><span class="token punctuation">;</span>

<span class="token comment">// top of SearchParams function body</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// replace button</span>
<span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> theme <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre>

<ul>
  <li>
    <code class="language-text">useContext</code> is how you get the context
    data out of a given context (you can lots of various types of context in a
    given app.)
  </li>
</ul>

<h3>in Details.js</h3>

<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// import</span>
<span class="token keyword">import</span> ThemeContext <span class="token keyword">from</span> <span class="token string">"./ThemeContext"</span><span class="token punctuation">;</span>

<span class="token comment">// replace button</span>
<span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>theme<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> theme <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Adopt <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<ul>
<li>This is how you use context inside of a class component.</li>
<li>Remember you cannot use hooks inside class components at all. This is why we're using the <code class="language-text">Consumer</code> from <code class="language-text">ThemeContext</code>. Functionally this works the same way though.</li>
</ul>


<h3>now inside searchParams.js add a select option for 4 possible themes. </h3>
<h4> !important </h4>
<li>You can have multiple layers of context. If I wrapped SearchParams in its own <code class="language-text">Provider</code> (in addition to the one that already exists), the SearchParams context would read from that because it's the closest one whereas Details would read from the top level one because it's the only one.</li>