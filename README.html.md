# adopt-me-btholt

<h1>React Capabilities</h1>

<h2>Class Components</h2>
<h3>recreate details but as a class component</h3>
<p>u dont need to change anything else</p>
<ul>
<li>Every class component extends <code class="language-text">React.Component</code>. Every class component must have a render method that returns some sort of JSX / markup / call to <code class="language-text">React.createElement</code>.</li>
<li>Not every component needs to have a constructor. Many don't. I'll show you momentarily how you nearly never need to have one. In this case we need it to instantiate the state object (which we'll use instead of <code class="language-text">useState</code>.) If you have a constructor, you <em>have</em> to do the <code class="language-text">super(props)</code> to make sure that the props are passed up to React so React can keep track of them.</li>
<li><code class="language-text">componentDidMount</code> is a function that's called after the first rendering is completed. This pretty similar to a <code class="language-text">useEffect</code> call that only calls the first time. This is typically where you want to do data fetching. It doesn't have to be async; we just made it async here to make the data fetching easy.</li>
<li>Notice instead of getting props via parameters and state via <code class="language-text">useState</code> we're getting it from the instance variables <code class="language-text">this.state</code> and <code class="language-text">this.props</code>. This is how it works with class components. Neither one will you mutate directly.
<ul>
<li><code class="language-text">this.state</code> is the mutable state of the component (like useState). You'll use <code class="language-text">this.setState</code> to mutate it (don't modify it directly.)</li>
<li><code class="language-text">this.props</code> comes from the parent component, similar to parameter given to the render functions that we pull props out of.</li>
</ul>
</li>
<li><code class="language-text">withRouter()</code> is called a higher order component and is a bit of an advance concept. Basically we're composing functionality into our component via react-router. Think of <code class="language-text">useParams</code>: it mixes in functionality from react-router by calling a hook. This is how you get that custom hook behavior of mixing in library functionality with class components. Redux does this too, but otherwise it's not overly common.</li>
</ul>
<h2 id="other-lifecycle-methods" style="position:relative;"><a href="#other-lifecycle-methods" aria-label="other lifecycle methods permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other lifecycle methods</h2>
<p>This class doesn't cover all the lifecycle methods but you can imagine having different timings for different capabilities of a component can be useful. For example, if you have a set of props that come in and you need to filter those props before you display them, you can use <code class="language-text">getDerivedStateFromProps</code>. Or if you need to react to your component being removed from the DOM (like if you're subscribing to an API and you need to dispose of the subscription) you can use <code class="language-text">componentWillUnmount</code>.</p>
<p>There are lots more you can check out in <a href="https://reactjs.org/docs/react-component.html">the React docs here</a>.</p>
