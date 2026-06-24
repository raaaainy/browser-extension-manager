import ExtensionsNav from "../components/ExtensionsNav";

export default {
  component: ExtensionsNav,
  title: "Components/ExtensionsNav",
};

export const Dark = {
  args: {
    isNightMode: true,
  },
};

export const Light = {
  args: {
    isNightMode: false,
  },
};
