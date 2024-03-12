import { FreshContext, Handlers } from "$fresh/server.ts";
import { MainPage } from "../islands/MainPage.tsx";
import { OfferComp } from "../islands/Offer.tsx";
import { Offer, OfferResponse } from "../types.tsx";
import axios from "npm:axios";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const url = new URL(req.url);
    const response = await axios.get<OfferResponse>(
      "https://www.arbeitnow.com/api/job-board-api",
    );
    const offers = response.data;
    return ctx.render({ offers: offers });
  },
};

const Page = (props: any) => {
  return (
    <div>
<MainPage {...props.data} />
    </div>
  );
};

export default Page;
