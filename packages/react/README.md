# Spirit UI React

Spirit UI React is a React component library that is built with Typescript, Tailwindcss, and Vite.

## Development

Spirit UI uses Storybook to develop components.

Run the Storybook development server

```bash
npm run dev
```

## Publishing

Spirit UI utilizes (changesets)[https://github.com/changesets/changesets] to manage package versioning and changelog documentation for releases.

1. Create a new changeset and decide what package should be version bumped (@spirit-ui/react), what kind of version bump is happening (major, minor, path), and add a summary for what the release changes entail.

```bash
npx changeset add
```

2. Consume the new changeset to bump the package version and write the changes made in the release to the changelog files.

```bash
npx changeset version
```

3. Publish the release.

```bash
npx changeset publish
```
