// worker.js
import { createRequestHandler } from "./.next/server/handler.js";

export default {
  async fetch(request, env, ctx) {
    return createRequestHandler({ env, ctx })(request);
  },
};
