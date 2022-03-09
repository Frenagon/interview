# Code exercise

Please follow these steps to complete this exercise.

## Homework

Imagine you're building a website for a portfolio, and you want to have a profile card element that
can be configured and reused easily, it's interactive and of course pretty.

- Implement a custom HTML element: Profile card -> &lt;profile-card> &lt;/profile-card>
  - Use Vanilla JS, CSS and HTML for your component
  - Add tests for the element, you can use selenium or follow a more challenging approach doing unit tests for it.
  - What if you wanted it to preserve its own styling among websites?

## Recommendations & tips

- Consider creating a branch and storing your work there
- Use your imagination and feel free to ask questions

# Implementation

I created two different implementations, with and without templates.

The framework used for unit testing was [Jest](https://jestjs.io/) using [Testing Library](https://testing-library.com/) for querying.

Using Shadow DOM helps preserve it's own styling without clashing with other contents of the page.

# How to Use

Clone the branch using the following command:

```console
git clone -b profile-card https://github.com/Frenagon/interview.git
```

If you haven't already, install yarn on your computer and execute the following command on the root of your project:

```console
yarn install
```

That's it!, you can run the project on a local server.

If you want to run the tests just execute the following command on the console:

```console
yarn test
```
