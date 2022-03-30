# adopt-me-btholt

<h1>Core React Concepts</h1>

<h2>costumHooks</h2>
<p>We need a list of breeds based on which animal is selected. In general this would be nice to request <em>once</em> and if a user returns later to the same animal, that we would have some cache of that. We could implement in the component (and in general I probably would, this is overengineering it for just one use) but let's make a custom hook for it.</p>
<p>Make a new file called <code class="language-text">useBreedList.js</code> in src and put this in it.</p>
<ul>
<li>We're using hooks inside of our custom hook. I can't think of a custom hook you would make that wouldn't make use of other hooks.</li>
<li>We're returning two things back to the consumer of this custom hook: a list of breeds (including an empty list when it doesn't have anything in it) and an enumerated type of the status of the hook: unloaded, loading, or loaded. We won't be using the enum today but this is how I'd design it later if I wanted to throw up a nice loading graphic while breeds were being loaded.</li>
</ul>