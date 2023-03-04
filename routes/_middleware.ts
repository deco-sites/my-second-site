import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 561,
  site: "my-second-site",
  domains: ["my-second-site.deco.site"],
});