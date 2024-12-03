import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-7J5J23X3RG"); // Replace with your GA Measurement ID
};

export const logPageView = () => {
  const path = window.location.pathname + window.location.search;
  ReactGA.set({ page: path });
  ReactGA.send({ hitType: "pageview", page: path });
};
