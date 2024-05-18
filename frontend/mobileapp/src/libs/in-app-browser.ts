import * as Device from "expo-device";
import * as WebBrowser from "expo-web-browser";

import { AppBrowser } from "@bundly/ares-react-native";

export const Browser: AppBrowser = {
  open: (url: string) => {
    WebBrowser.openBrowserAsync(url, { showTitle: false });
  },
  close: () => {
    if (["iOS", "iPadOS"].includes(Device.osName || "")) {
      WebBrowser.dismissBrowser();
    }
  },
};
