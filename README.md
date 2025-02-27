# The F# Software Foundation

This repository hosts [The F# Software Foundation web site](https://fsharp.org/). Pull requests are welcome. The web site code is hosted in the `gh-pages` branch and is created using the tools provided by GitHub:

* Switch to [the `gh-pages` branch](https://github.com/fsharp/fsharp.org/tree/gh-pages)
* Read [documentation for Github Pages](https://help.github.com/categories/20/articles)
* The site is using [Jekyll for templating](http://jekyllrb.com/docs/usage/)

## Development

The easiest way to get started with this repository is by using the supplied dev container.

### Using the Dev Container

1. Open the repository in Visual Studio Code.
2. When prompted, reopen the repository in the dev container.
3. The dev container will automatically set up the development environment.

**Summary of using a dev container:**
A dev container is a pre-configured development environment that includes all the necessary tools and dependencies. It allows you to start developing without having to manually set up your environment.

If not using VSCode, consult your preferred IDE's documentation for instructions.

To start the development server, run the following command:

```sh
bundle exec jekyll serve
```

Or, to enable live reloading:

```sh
bundle exec jekyll serve -l
```

The site will be available at `http://localhost:4000`
