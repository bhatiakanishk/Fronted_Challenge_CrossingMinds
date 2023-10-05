# Crossing Minds Front-end Challenge: Product page

## The Challenge

Hi! Thanks for your interest in Crossing Minds. We've put to gether a project that we think will give you a chance to show off your skills. We're looking forward to seeing what you can do!

Crossing Minds works with e-commerce companies to provide product recommendations. **You'll be building a React app that resembles a product page on an e-commerce site.** You'll be given a mock API that returns product data, and you'll use that data to build the page.

### Time and effort

We expect this project to take about 4 to 6 hours to complete. **Please stop at 6 hours.** Completion is not the most important thing. We're looking for quality over quantity.

If you really feel like you have to continue beyond 6 hours, make a new branch and continue there (submit both branches). Please add good documentation about each branch in the readme for the main branch.

### Delivery

Most candidates choose to submit the finished project in the same way they received it, zipped and sent in an email or via google drive. Remember to remove the `node_modules` folder before zipping so the file size is reasonable.

If you prefer a different way of delivering the project, that's ok too. We ask that you not not make your repo public, so that other candidates can't find it and use your hard work as an example.

Make sure you test your deliverables before sending them. If we can't view the live site and read your source code, there's nothing for us to evaluate.

### Mockups

You'll get UX specifications directly from the **Figma mockups**

https://www.figma.com/file/X99gwgK2Yk53cGyXrlf2ps/Frontend-Engineer-Challenge?type=design&node-id=6%3A4327&mode=dev

**Find specifications like color, font, spacing, etc. in Figma.** If you have any trouble finding what you need in Figma, please let us know. It's essential that you match the mockups as closely as possible, so don't hesitate to ask for help if you think you're missing something.

There are some elements in the mockup that are not required to complete the project. Please read the "Requirements" section below for the mandatory elements.

A note on interactivity:
The only buttons we expect to be functional are the forward and backward buttons on the carousel. It's ok for the others to be non-functional. If you complete the required aspects of the project, you can explore adding additional functionality.

### Requirements

- Provide good instructions on how to view or run your project.
- Include notes about how long you spent on the project. Feel free to mention challenges and successes you had along the way.
- Please don't post your repo publicly, make sure no one else can cheat off your work.
- If you decide use AI/ChatGPT/Copilot, you must include notes/comments about where and how you used it.
- Layout and style closely match mockups
- UI should be responsive, and look good with any size window
- Data is "fetched" asynchronously (it's ok to use the mock data provided)
- Components that appear more than once are reusable

- Sticky page header
  - Title of your store (make one up!)
  - Cart icon
- Product area
  - Main product image
  - Product title
  - Product Price
  - Add to cart button
  - Product description
- Carousels (2)
  - Carousel title
  - Forward and back buttons
  - Carousel items
    - Image
    - Title
    - Price
    - Add to cart button

### Bonus (optional) features

You don't need to do these things to successfully complete the project, but they're a great way to show off your skills if you've expertly completed the requirements.

- Add a "loading" state to components that rely on asynchronous data
- Add an "error" state to components that rely on asynchronous data
- Fetch actual data from Crossing Minds API using the Recommendation Client (more info below)
- A working "count" input (the input with the plus and minus buttons)

## How this project will be evaluated

We're looking for the following (roughly in order of importance):

- Styling accuracy and CSS skills
- Typescript/Javascript skills
- Responsive UI
- Use of contemporary React patterns
- Code organization and legibility
- Completeness

## Getting Started

You can use this project template, or you can start your own project from scratch. This template is meant to be a helpful starting point, but feel free to do things your way too.

```zsh
npm install

npm run dev
```

## Libraries

### Required Libraries

We expect you to write React! It's the only required library for this project.

- `react`

### Optional Libraries

The following libraries are part of Crossing Minds tech stack. Using them may be an opportunity to show that your skills are aligned with our stack. However, they're not required, so don't use them if they're going to slow you down.

- React Query | server state management
- Vanilla Extract | CSS-in-JS
- TypeScript | If you can write TypeScript, you really should!

### Other Libraries

You can use any other libraries you want, but you'll need to justify your choices. We're looking for thoughtful choices, not just "I used this because I like it."

## Mock Data

There is a `src/mockData` directory that contains two functions for you to get data from. One is for the product details at the top of the page, the other is for the carousels at the bottom of the page.

This data is pulled from some actual APIs we use, so it may be a little confusing at first. There will be a lot of additional properties you don't need. Do your best to figure it out, and feel free to ask for help if you get stuck.

A note on the items: The items are from open source H&M data. There might be some strange items in there, so don't be surprized if there are some goofy kids pajamas from the early 2000s or something.

## Recommendation Client

This is a bonus! (not required).

The following are instructions show you how to replace the `getMockItemData` function with real data for the carousels. You'll still need to use the `getMockProductPageData` function for product detail data.

From TS/JS projects, we access the Crossing Minds API using the `@crossingminds/recommendation-client` [npm library](https://www.npmjs.com/package/@crossingminds/recommendation-client). You can find some documentation there. It's not well documented, so you may want to look at the [code tab](https://www.npmjs.com/package/@crossingminds/recommendation-client?activeTab=code).

Here's some code to get you started:

```ts
import {
  GetSessionBasedItemRecommendationsCommand,
  RecommendationClient,
  ListPropertiesOfManyItemsByIdCommand,
} from "@crossingminds/recommendation-client";

const client = new RecommendationClient({
  allowedAccountRoles: "frontend",
  endpointBasePath: "https://staging-api.crossingminds.com",
  initialCredentials: {
    currentDatabaseId: "JLuwNul00-x1u3AF1XUYeA",
    password: "adj5upe2ZCU*bnm4unh",
    serviceLoginId: "front-end-challenge",
  },
});
```

There are three steps to getting recommendations with item data:

1. Initialize the client with your credentials (see code above).
2. Get recommended item ids with the `GetSessionBasedItemRecommendationsCommand` command.
   - This requires a session id, which is a [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier). You can generate a uuid with [crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID), or you can hard code one.
3. Get item data with the `ListPropertiesOfManyItemsByIdCommand` command. You ll need to pass in the item ids you got from the previous step.

Side note: `sessionId`s are the same values as the variant ids from `getMockProductPageData`.
