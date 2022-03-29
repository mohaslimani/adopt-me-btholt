# adopt-me-btholt

<h1>Core React Concepts</h1>

<h2>JSX</h2>
<p>If I write <code class="language-text">React.createElement("h1", { id: "main-title" }, "My Website");</code>, what am I actually trying to have rendered out? <code class="language-text">&lt;h1 id="main-title"&gt;My Website&lt;/h1&gt;</code>, right? What JSX tries to do is to shortcut this translation layer in your brain so you can just write what you mean. Let's convert Pet.js to using JSX. It will look like this:</p>
<p>Notice we have Pet as a component. Notice that the <code class="language-text">P</code> in <code class="language-text">Pet</code> is capitalized. It <em>must</em> be. If you make it lowercase, it will try to have <code class="language-text">pet</code> as a web component and not a React component.</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// delete the import</span>

<span class="token keyword">const</span> <span class="token function-variable function">Pet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>animal<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>breed<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Pet<span class="token punctuation">;</span></code></pre></div>

<h2>ESLint + React</h2>
<p>We need to give ESLint a hand to get it to recognize React and not yell about React not being used. Right now it thinks we're importing React and not using because it doesn't know what to do with React. Let's help it.</p>
<p>Run this: <code class="language-text">npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0</code></p>
<p>Update your .eslintrc.json to:</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:import/errors"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:react/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:jsx-a11y/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"prettier"</span><span class="token punctuation">,</span>
    <span class="token string">"prettier/react"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react/prop-types"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react/react-in-jsx-scope"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token string">"jsx-a11y"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"ecmaVersion"</span><span class="token operator">:</span> <span class="token number">2021</span><span class="token punctuation">,</span>
    <span class="token string-property property">"sourceType"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"ecmaFeatures"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"browser"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"detect"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre></div>
<ul>
<li>The import plugin helps ESLint catch commons bugs around imports, exports, and modules in general</li>
<li>jsx-a11y catches many bugs around accessibility that can accidentally arise using React, like not having an <code class="language-text">alt</code> attribute on an <code class="language-text">img</code> tag.</li>
<li>react is mostly common React bugs like not calling one of your props children.</li>
<li><code class="language-text">eslint-plugin-react</code> now requires you to inform of it what version of React you're using. We're telling it here to look at the package.json to figure it out.</li>
<li><code class="language-text">"react/react-in-jsx-scope": 0</code> is new since you used to have to import React everywhere but now with the recent revision of React you don't need to.</li>
</ul>

