import {
  ContactUs,
  Error,
  Groom,
  Grooms,
  Home,
  PrivacyPolicy,
  TermsAndConditions,
} from "components/features";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/grooms",
    element: Grooms,
  },
  {
    path: "/groom/:id",
    element: Groom,
  },
  {
    path: "/terms-and-conditions",
    element: TermsAndConditions,
  },
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
  },
  {
    path: "/contact-us",
    element: ContactUs,
  },
  {
    path: "*",
    element: Error,
  },
];

export default routes;
