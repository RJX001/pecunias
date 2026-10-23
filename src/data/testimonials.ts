export type Testimonial = {
  name: string;
  business: string;
  quote: string;
  role?: string;
  rating?: number;
  website?: string;
};
// Add only owner-supplied, approved review wording and actual ratings. Empty means hidden.
export const testimonials: readonly Testimonial[] = [];
