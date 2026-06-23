import ExtensionCard from "../components/ExtensionCard";
import extensions from "../../data.json";

export default {
  component: ExtensionCard,
  title: "ExtensionCard",
};

export const Default = {
  args: { extension: extensions[0] },
};

export const Inactive = {
  args: { extension: extensions[2] },
};

export const Light = {
  args: {
    extension: extensions[1],
    isNightMode: false,
  },
};
