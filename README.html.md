# adopt-me-btholt

<h1>Special Case React Tools</h1>

<h2> Portals & Refs</h2>
<p>You can think of the portal as a separate mount point (the actual DOM node which your app is put into) for your React app</p>
<p>A common use case for this is going to be doing modals.</p>
<p>A modal (also called a modal window or lightbox) is a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it</p>
<p>i like to call it a fancy pop up.</p>
<p>You'll have your normal app with its normal mount point and then you can also put different content into a separate mount point (like a modal or a contextual nav bar) directly from a component. Pretty cool!</p>
<h2>...</h2>
<ol>
<li><p>First thing, let's go into index.html and add a separate mount point:</p>
<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- above #root --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>

<p>This where the modal will actually be mounted whenever we render to this portal. Totally separate from our app root.</p>
</li>

<li><h3>in Modal.js</h3>
<ul>
<li>This will mount a div and mount inside of the portal whenever the Modal is rendered and then <em>remove</em> itself whenever it's unrendered.</li>
<li>We're using the feature of <code class="language-text">useEffect</code> that if you need to clean up after you're done (we need to remove the div once the Modal is no longer being rendered) you can return a function inside of <code class="language-text">useEffect</code> that cleans up.</li>
<li>We're also using a ref here via the hook <code class="language-text">useRef</code>. Refs are like instance variables for function components. Whereas on a class you'd say <code class="language-text">this.myVar</code> to refer to an instance variable, with function components you can use refs. They're containers of state that live outside a function's closure state which means anytime I refer to <code class="language-text">elRef.current</code>, it's <strong>always referring to the same element</strong>. This is different from a <code class="language-text">useState</code> call because the variable returned from that <code class="language-text">useState</code> call will <strong>always refer to the state of the variable when that function was called.</strong> It seems like a weird hair to split but it's important when you have async calls and effects because that variable can change and nearly always you want the <code class="language-text">useState</code> variable, but with something like a portal it's important we always refer to the same DOM div; we don't want a lot of portals.</li>
<li>Down at the bottom we use React's <code class="language-text">createPortal</code> to pass the children (whatever you put inside <code class="language-text">&lt;Modal&gt;&lt;/Modal&gt;</code>) to the portal div.</li>
</ul>
</li>

<li><p>Now go to Details.js and add:</p>
<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at the top</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">"./Modal"</span><span class="token punctuation">;</span>

<span class="token comment">// add showModal</span>
state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">showModal</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// above render</span>
<span class="token function-variable function">toggleModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">showModal</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showModal <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function-variable function">adopt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">"http://bit.ly/pet-adopt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add showModal</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  animal<span class="token punctuation">,</span>
  breed<span class="token punctuation">,</span>
  city<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
  description<span class="token punctuation">,</span>
  name<span class="token punctuation">,</span>
  images<span class="token punctuation">,</span>
  showModal<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>

<span class="token comment">// add onClick to &lt;button&gt;</span>
<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleModal<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> theme <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
  Adopt <span class="token punctuation">{</span>name<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// below description</span>
<span class="token punctuation">{</span>
  showModal <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Modal<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Would you like to adopt <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"buttons"</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>adopt<span class="token punctuation">}</span><span class="token operator">&gt;</span>Yes<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleModal<span class="token punctuation">}</span><span class="token operator">&gt;</span>No<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span></code></pre></div>
<ul>
<li>We're using a simple <code class="language-text">window.location</code> redirect since we're heading off site. This is bad accessibility so you should be extra cautious when doing this. The button should be an <code class="language-text">&lt;a&gt;</code> tag but I wanted to show you how to do it. But now if you click Yes on the adopt modal it'll take you to the page when you actually can adopt a pet!</li>
<li>Notice that despite we're rendering a whole different part of the DOM we're still referencing the state in Details.js. This is the magic of Portals. You can use state but render in different parts of the DOM. Imagine a sidebar with contextual navigation. Or a contextual footer. It opens up a lot of cool possibilities.</li>
</ul>
</li>

</ol>