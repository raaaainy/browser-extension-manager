import ExtensionsHeader from "../components/ExtensionsHeader";

export default {
  component: ExtensionsHeader,
  title: "Components/ExtensionsHeader",
};

export const All = {
  args: { mode: 0 },
};

export const Active = {
  args: { mode: 1 },
};

export const Inactive = {
  args: { mode: 2 },
};

export const Light = {
  args: { mode: 0, isNightMode: false },
};
