> 21 February 2024

# React Query

- Server Start

```
yarn start
```

- Client Start

```
yarn dev
```

## Dependance:-

- yarn add axios
- yarn add json-server
- yarn add react-toastify
- yarn add react-hook-form
- yarn add @tanstack/react-query
- yarn add @tanstack/react-query-devtools

### Client side setup

- 1st - `react-query`

  - by Context api setup style - implement react-query at root level of app
  - setup browser dev tools for debugging

- 2nd - `useQuery` hook
  - for get data form server use this `useQuery` hook
  - pass fetching function inside its as value of `queryFu` property
