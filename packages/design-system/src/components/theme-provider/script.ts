/**
 * This script is utilized to provid the [data-theme]
 * attribute to the root element during server side compilation.
 *
 * This will help prevent the flicker effect.
 *
 * If user has applied theme preference before, the we will
 * use the stored theme value under the `spirit-ui-theme` key
 * in local storage.
 *
 * If not, we will default to
 * the light theme.
 */
export const script = () => {
  const applyTheme = (theme: string) =>
    document.querySelector(":root")?.setAttribute("data-theme", theme);
  const theme = window.localStorage.getItem("spirit-ui-theme") || "light";
  applyTheme(theme);
};
