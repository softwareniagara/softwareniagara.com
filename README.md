# softwareniagara.com

This project is the static website generator used to generate softwareniagara.com.

## Getting Started

1. `git clone git@github.com:softwareniagara/softwareniagara.com.git`
2. `cd softwareniagara.com`
3. `npm install`
4. `npm start`
5. `open http://localhost:8000` to view the website
6. `open http://localhost:8000/___graphql` to view Graphiql and explore the site's schema and data.

## Adding Content

The content for this website comes from markdown files stored in the `/src/content` directory.

Creating content for this website requires basic markdown knowledge.

Don't know markdown? Here's a [Guide to Mastering Mardown](https://guides.github.com/features/mastering-markdown/). This three minute read will have you up to speed for contributing to this project.

### Add a Venue

Create a markdown file in the `/src/content/venues` directory using the name of the venue as the filename.

Use the following template for the file:

```
---
title: "Fine Grind Cafe"
slug: "finegrind"
address: "37 James Street"
city: "St. Catharines"
province: "ON"
postalCode: "L2R 5B4"
---
```

There are two things to note here:

1. There is only frontmatter in these files.
2. You must supply a unique slug. The unique slug can be referenced in other content to embed the venue data in another content entity.

### Add an Event Category

Create a markdown file in the `/src/content/categories` directory using the name of the category as the filename.

Use the following template for the file:

```
---
title: "DevTricks"
slug: "devtricks"
summary: "In this long-lived series, up to three developers share their tips & tricks with you."
---

Learn tricks of the trade from local software developers.
```

There are two things to note here:

1. There is frontmatter and markdown content in these files. The markdown content comes after the frontmatter. 
2. You must supply a unique slug. The unique slug can be referenced in other content to embed the category data in another content entity.

### Adding an Event

Create a markdown file in the `/src/content/events` directory using the name of the event as the filename.

Use the following template for the file:

```
---
title: "DevTricks 53"
slug: "devtricks-53"
category: "devtricks"
date: "2019-02-11"
time: "7PM"
venue: "lws"
city: "St. Catharines"
registration: "https://www.facebook.com/events/403445813532794/"
---

Mark your calendar, DevTricks February Edition is happening! Working on something cool or using some sort of tech that everyone should know about? We want to hear about it! Feel free to sign up to do a talk.
```

There are a few things to note here:

1. There is frontmatter and markdown content in these files. The markdown content comes after the frontmatter.
2. You must supply a unique slug. This slug will be appended to `/events` and form the URL for this event. E.g. `/events/devtricks-53` in this case.
3. The category should reference an existing category entity by its slug.
4. The venue should reference an existing venue entity by its slug.

### Adding a Page

Create a markdown file in the `/src/content/pages` directory using the name of the page as the filename.

Use the following template for the file:

```
---
title: "Code of Conduct"
slug: "code-of-conduct"
---

# Code of Conduct

All participants of The Software Niagara Community are expected to abide by our Code of Conduct, both online and during in-person events that are hosted and/or associated with Software Niagara.
```

There are a couple things to note here:

1. There is frontmatter and markdown content in these files. The markdown content comes after the frontmatter.
2. You must supply a unique slug. This slug will be path to the page. E.g. `/code-of-conduct` in this case.

## Adding Features and Functionality

This static website generator uses [GatsbyJS](https://www.gatsbyjs.org/). Contributing content to this website requires basic markdown knowledge. 

Adding features and functionality to this website via the static site generator will require comfort with JavaScript including newer language features. It may also, depending on what you are trying to achieve, require comfort with GraphQL.

Finally, knowledge of GatsbyJS will come in handy. If you are not familiar with GatbsyJS, checkout the [tutorial for creating a site](https://www.gatsbyjs.org/tutorial/) or the [documentation and code samples](https://www.gatsbyjs.org/docs/).

## Contributing Guidelines

After adding content, features, or functionality, you may submit a pull request. 

See [Contributing Guidelines](CONTRIBUTING.md) for more details.

## Deployment

When you submit a pull request, a live build will be automatically created and published on Netlify. 

If you look at the `checks` section in the pull request, you will see a line for `deploy/netlify`. When that has a green checkmark next to it, it means your branch has been built and published. Click the `details` link next to the lineitem to view your changes live. 

The preview URL takes the format of `https://deploy-preview-{#PR}--softwareniagara.netlify.com/`, where you may replace `{#PR}` with the number of your pull request.

After your pull request is approved and merged to master, it will be automatically built and deployed to https://www.softwareniagara.com.

## Code of Conduct

We have tried to make this project easy for anyone to contribute to, preview their contributions, and publish them to the live website. We appreciate any and all contributions, though we do reseve the right to not accept contributions should they not be inline with the direction of the project, not be factual, or not adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).
