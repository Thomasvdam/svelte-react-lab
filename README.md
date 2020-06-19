# Svelte vs. React lab

A collection of scripts/components I used to do some research into performance and way of working for both frameworks. This is just the finial state of the directory, a whole bunch of test or tweaks I did are not (completely) present, but this should provide enough for you to get an idea of what I did.

It's important to note that I made a few adjustments so that the 'apps' are runnable as is. For my tests I generated a single tree, stringified the JSON structure, and inlined that in the files to guarantee that tree strucuture was consistent between the two.

## How I started

Two basic apps using the recommended starting points from the frameworks:

```shell
# Svelte
npx degit sveltejs/template svelte-app
```

```shell
# React
npx create-react-app react-app
```

I presume a lot of developers will start like this, so it seemed only fair to compare the two in this state without any additional webpack/rollup config tweaking.

For the tests I used production builds (`npm run build`) and served those with a simple python fileserver.
