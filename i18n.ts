import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  timeZone: "Asia/Kathmandu",
  messages: (await import(`/messages/${locale}.json`)).default,
}));
