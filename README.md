# Twiglet

This is a suite of tools used for my private vendor application

## Usage

```bash
yarn add twiglet or npm install twiglet
```

Error Handling Example

```js
import { StrapiError } from "twiglet";

module.exports = createCoreController("api::vendor.vendor", ({ strapi }) => ({
  async create(ctx) {
    try {
      const body = ctx.request.body.data;
      const newStore = await strapi.service("api::vendor.vendor").create(body)
      return ctx.send(newStore, 200);
    } catch (error) {
      // Use the StrapiError handler here
      return new StrapiError(ctx, "Something don sup ooo", {service: 'paypal' }).PaymentRequired()
    }
  },
}));
```

