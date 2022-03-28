# adopt-me-btholt

<h1>Pure React</h1>
step1; https://btholt.github.io/complete-intro-to-react-v6/pure-react

We have two script tags.
<ul>
<li>The first is the React library. This library is the interface of how to interact with React; all the methods (except one) will be via this library. It contains no way of rendering itself though; it's just the API.</li>
<li>The second library is the rendering layer. Since we're rendering to the browser, we're using React DOM. There are other React libraries like React Native, React 360 (formerly React VR), A-Frame React, React Blessed, and others. You need both script tags. The order is not important.</li>
</ul>


<li>A function component <em>must</em> return markup (which is what <code class="language-text">React.createElement</code> generates.)</li>

<li><code class="language-text">React.createElement</code> creates one <em>instance</em> of some component. If you pass it a <em>string</em>, it will create a DOM tag with that as the string. We used <code class="language-text">h1</code> and <code class="language-text">div</code>, those tags are output to the DOM. If we put <code class="language-text">x-some-custom-element</code>, it'll output that (so web components are possible too.)</li>

<li>The second empty object (you can put <code class="language-text">null</code> too) is attributes we're passing to the tag or component. Whatever we put in this will be output to the element (like id or style.)</li>

<li><code class="language-text">ReactDOM.render</code> is what takes our rendered <code class="language-text">App</code> component and puts in the DOM (in our case we're putting it in the <code class="language-text">root</code> element.)</li>

<li>Notice we're using <code class="language-text">React.createElement</code> with <code class="language-text">App</code> as a parameter to <code class="language-text">ReactDOM.render</code>. We need an <em>instance</em> of <code class="language-text">App</code> to render out. <code class="language-text">App</code> is a class of components and we need to render one instance of a class. That's what <code class="language-text">React.createElement</code> does: it makes an instance of a class.</li>
