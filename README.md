-install project `npm install`
-run project `npm run dev`

-github `https://github.com/HuyNguyen243/NEVEL_GAME_STORE_TEST`

![Image](./screen.png)

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
