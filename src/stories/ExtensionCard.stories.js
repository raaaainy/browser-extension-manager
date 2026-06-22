import ExtensionCard from "../components/ExtensionCard";
import logo from "../assets/images/logo-devlens.svg";

export default {
  component: ExtensionCard,
  title: "ExtensionCard",
};

export const Default = {
  args: {
    extension: {
      logo: logo,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
  },
};
