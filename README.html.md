# adopt-me-btholt

<h1>Core React Concepts</h1>

<h2>Hooks</h2>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">SearchParams</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token string">"Seattle, WA"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-params"</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>form<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"location"</span><span class="token operator">&gt;</span>
          Location
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"location"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>location<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"Location"</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> SearchParams<span class="token punctuation">;</span></code></pre></div>

<h3>Why i cant modify the inputs ???</h3>
<p>Let's think about how React works: when you type in the input, React detects that a DOM event happens. When that happens, React thinks <em>something</em> may have changed so it runs a re-render. Providing your render functions are fast, this is a very quick operation.</p>

<h3>Why ClassName/htmlFor and not class/for ??</h3>
<p>This is because <code class="language-text">class</code> is a reserved word in JS and JSX is still just JS. So instead they opted to use <code class="language-text">className</code> which is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className">name of the JS API</a> for interacting with class names.</p>

<h3> How to enable modifying on inputs ? (re-rendering) </h3>
<p>So if we type in our input and it re-renders, what gets out in the <code class="language-text">input</code> tag? Well, its value is tied to <code class="language-text">location</code> and nothing changed that, so it remains the same. In other words, two way data binding is <em>not</em> free in React. I say this is a feature because it makes you explicit on how you handle your data. Let's go make it work.</p>

<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// in SearchParams.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// replace location</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>location<span class="token punctuation">,</span> updateLocation<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"Seattle, WA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// replace input</span>
<span class="token operator">&lt;</span>input
  id<span class="token operator">=</span><span class="token string">"location"</span>
  value<span class="token operator">=</span><span class="token punctuation">{</span>location<span class="token punctuation">}</span>
  placeholder<span class="token operator">=</span><span class="token string">"Location"</span>
  onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">updateLocation</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></code></pre></div>

<h3>quick note:</h3>
<p>e is the event, which in this case is change, target is the element that triggered the event, which in this case is the input, and value is the value of the input element</p>

<ul>
<li>An <em>absolutely key</em> concept for you to grasp is hooks rely on this strict ordering. As such, <strong>do not put hooks inside if statements or loops</strong>. If you do, you'll have insane bugs that involve <code class="language-text">useState</code> returning <em>the wrong state</em>. If you see <code class="language-text">useState</code> returning the wrong piece of state, this is likely what you did.</li>
<li>Because the previous point is so absolutely critical, the React team has provided us with a lint rule that help us not fall into that trap. That lint rule relies on us, the developers, to follow the convention of calling our hooks <code class="language-text">useXxxxxx</code>. If you're willing to do that, the lint rules will guard you from calling the hooks out of order.</li>
<li>The argument given to <code class="language-text">useState</code> is the default value. In our case, we gave it <code class="language-text">"Seattle, WA"</code> as our default value.</li>
<li><code class="language-text">useState</code> returns to us an array with two things in it: the current value of that state and a function to update that function. We're using a feature of JavaScript called destructuring to get both of those things out of the array.</li>
<li>We use the <code class="language-text">updateLocation</code> function in the <code class="language-text">onChange</code> attribute of the input. Every time the input is typed into, it's going to call that function which calls <code class="language-text">updateLocation</code> with what has been typed into the input. When <code class="language-text">updateLocation</code> is called, React knows that its state has been modified and kicks off a re-render.</li>
<li>You can make your own custom hooks; <code class="language-text">useState</code> is just one of many.</li>
</ul>

<p>Let's add the ESLint rule. Run <code class="language-text">npm install -D eslint-plugin-react-hooks@4.2.0</code>. Add this to ESLint:</p>
<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    …
    <span class="token string">"plugin:react-hooks/recommended"</span><span class="token punctuation">,</span>
    …
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre></div>