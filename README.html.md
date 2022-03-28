# adopt-me-btholt

<h2>npm</h2>
<p>In order to start an npm project, run <code class="language-text">npm init</code> at the root of your project. If you don't have Node.js installed, please go install that too. When you run <code class="language-text">npm init</code> it'll ask you a bunch of questions. If you don't know the answer or don't care, just hit enter. You can always modify package.json later. This will allow us to get started installing and saving packages.</p>

<h2>Prettier</h2>
<p>Either install Prettier globally <code class="language-text">npm install --global prettier</code> or replace when I run <code class="language-text">prettier</code> with (from the root of your project) <code class="language-text">npx prettier</code>. From there, run <code class="language-text">prettier script.js</code>. This will output the formatted version of your file. If you want to actually write the file, run <code class="language-text">prettier --write script.js</code>.</p>
<p>Prettier is great to use with <a href="https://code.visualstudio.com/?WT.mc_id=reactintro-github-brholt">Visual Studio Code</a>. Just download <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&amp;WT.mc_id=reactintro-github-brholt">this extension</a>. Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it off. In order to do that, set <code class="language-text">prettier.requireConfig</code> to <code class="language-text">true</code> and <code class="language-text">editor.formatOnSave</code> to true.</p>
<p>So that our tool can know this is a Prettier project, we're going to create a file called <code class="language-text">.prettierrc</code> and put <code class="language-text">{}</code> in it. This lets everyone know this is a Prettier project that uses the default configuration. You can put other configs here if you hold strong formatting opinions.</p>
<p>First run <code class="language-text">npm install -D prettier</code>. <code class="language-text">-D</code> means it's for development only.</p>
<pre class="language-json"><code class="language-json"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write \"src/**/*.{js,jsx}\""</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>
<p>Now you can run <code class="language-text">yarn format</code> or <code class="language-text">npm run format</code> and it will run that command.</p>

<h2>ESlint</h2>
<p>On top of Prettier which takes of all the formatting, you may want to enforce some code styles which pertain more to usage.</p>
<p>First of all, run <code class="language-text">npm install -D eslint eslint-config-prettier</code> to install eslint in your project development dependencies. Then you may configure its functionalities.</p>
<p>There are dozens of preset configs for ESLint and you're welcome to use any one of them. The <a href="https://github.com/airbnb/javascript">Airbnb config</a> is very popular,I'm going to use a looser one for this class: <code class="language-text">eslint:recommended</code>. Let's create an <code class="language-text">.eslintrc.json</code> file to start linting our project.</p>
<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint \"src/**/*.{js,jsx}\" --quiet"</span><span class="token punctuation">,</span></code></pre></div>
<p>Worth adding three things here:</p>
<ul>
<li>With npm scripts, you can pass additional parameters to the command if you want. Just add a <code class="language-text">--</code> and then put whatever else you want to tack on after that. For example, if I wanted to get the debug output from ESLint, I could run <code class="language-text">npm run lint -- --debug</code> which would translate to <code class="language-text">eslint **/*.js --debug</code>.</li>
<li>We can use our fix trick this way: <code class="language-text">npm run lint -- --fix</code>.</li>
<li>We're going to both JS and JSX.</li>
</ul>

<h2>Git</h2>
<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">node_modules
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/</code></pre></div>


