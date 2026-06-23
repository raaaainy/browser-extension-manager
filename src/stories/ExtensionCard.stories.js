import ExtensionCard from "../components/ExtensionCard";
import devLensLogo from "../assets/images/logo-devlens.svg";
import domSnapshotLogo from "../assets/images/logo-dom-snapshot.svg";

export default {
  component: ExtensionCard,
  title: "ExtensionCard",
};

export const Default = {
  args: {
    extension: {
      logo: devLensLogo,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    isNightMode: true,
  },
};

export const Inactive = {
  args: {
    extension: {
      logo: domSnapshotLogo,
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    isNightMode: true,
  },
};

export const Light = {
  args: {
    extension: {
      logo: domSnapshotLogo,
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: true,
    },
    isNightMode: false,
  },
};
