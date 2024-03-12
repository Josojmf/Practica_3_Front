
export type Offer = {
    slug: string;
    company_name: string;
    title: string;
    description: string;
    remote: boolean;
    url: string;
    tags : string[];
    location: string;
    created_at: number;
};
export type OfferResponse = {
    data: Offer[];
};