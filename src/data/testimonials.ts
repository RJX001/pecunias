export type FeedbackContentType =
  | "owner_supplied_feedback_summary"
  | "awaiting_feedback_wording";

export type Testimonial = {
  name: string;
  business: string;
  website: string;
  /** Third-person summary. Null when no feedback wording was supplied. */
  summary: string | null;
  contentType: FeedbackContentType;
  /**
   * Public deck only when this is true and summary is a real supplied summary.
   * A saved client with no wording stays false so it cannot hide the others.
   */
  renderPublicSummary: boolean;
};

export type PublicTestimonial = Testimonial & { summary: string };

/**
 * A card is public only when the record itself says so: an owner-supplied
 * summary, marked for the public deck, with actual wording. Environment and
 * the old approved flag are not consulted. A future summary joins the deck
 * by setting those three fields; no component change is required.
 */
export function isPublicFeedbackSummary(
  item: Testimonial,
): item is PublicTestimonial {
  return (
    item.renderPublicSummary === true &&
    item.contentType === "owner_supplied_feedback_summary" &&
    typeof item.summary === "string" &&
    item.summary.trim().length > 0
  );
}

export const testimonials: readonly Testimonial[] = [
  {
    name: "Mr Gurdip Singh",
    business: "Completely Secured",
    website: "https://completelysecured.co.uk/",
    summary: "Pleased with the website created for Completely Secured.",
    contentType: "owner_supplied_feedback_summary",
    renderPublicSummary: true,
  },
  {
    name: "Mr Larry M",
    business: "Atlantis Linen Services",
    website: "https://atlantislinenservices.co.uk/",
    summary:
      "Happy with the time taken to create the website and found Rajan and Taran easy to work with.",
    contentType: "owner_supplied_feedback_summary",
    renderPublicSummary: true,
  },
  {
    name: "Mr Patel",
    business: "CardChart",
    website: "https://www.cardchart.co.uk/",
    summary:
      "Happy with the ongoing development of CardChart and the creation of AI systems for the trading card market.",
    contentType: "owner_supplied_feedback_summary",
    renderPublicSummary: true,
  },
  {
    name: "Mr Aarron D",
    business: "Beckbury Chippy",
    website: "https://beckburychippy.food2go.co.uk/",
    summary: null,
    contentType: "awaiting_feedback_wording",
    renderPublicSummary: false,
  },
];
