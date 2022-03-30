# adopt-me-btholt

<h1>React Capabilities</h1>

<h2>Class Properties</h2>
<div class="lesson"><h1>Class Properties</h1><h2></h2><div class="lesson-content"><p>The constructor is annoying. We can use something called class properties to make it a lot nicer and easier to read. Class properties are a new part of JavaScript so we need Parcel transform the code when Parcel transpiles our code. Luckily our config will do that by itself so no further changes are needed (previously we did need to.)</p>
<p>Since we're going to take ahold of our own Babel configuration, we need to take over <em>all of it</em>. Parcel won't do it for us anymore. So install the following:</p>
<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4</code></pre></div>
<p>Now modify your <code class="language-text">.babelrc</code> with the following:</p>
<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"@babel/preset-react"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"runtime"</span><span class="token operator">:</span> <span class="token string">"automatic"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-env"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/plugin-proposal-class-properties"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span></code></pre></div>
<p>Babel's core concept is a plugin. Every one sort of a transformation it can perform is encapsulated into a plugin. Here we're including one explicitly: transform-class-properties. Then we're including a <em>preset</em> as well. A preset is just a group of plugins, grouped together for convenience. <code class="language-text">env</code> is a particularly good one you should expect to normally use.
This will allow us too to make ESLint play nice too (Prettier handles this automatically.) Add one line to the top level of your <code class="language-text">.eslintrc.json</code>:</p>
<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  …
  <span class="token property">"parser"</span><span class="token operator">:</span> <span class="token string">"@babel/eslint-parser"</span><span class="token punctuation">,</span>
  …
<span class="token punctuation">}</span></code></pre></div>
<p>Now with this, we can modify Details to be as so:</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// replace constructor</span>
state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>
<p>Loads easier to read, right?</p></div></div>