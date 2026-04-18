import { LANDER_WIDTH } from "./helpers/constants.js";

const makeLanderGradient = (
  CTX,
  color1,
  color2,
  color3,
  color4,
  width = LANDER_WIDTH
) => {
  const gradient = CTX.createLinearGradient(-width / 2, 0, width / 2, 0);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(0.3, color2);
  gradient.addColorStop(0.6, color3);
  gradient.addColorStop(1, color4);
  return gradient;
};

const makeSpaceBackgroundGradient = (CTX, canvasHeight, backgroundColor) => {
  const gradient = CTX.createLinearGradient(0, 0, 0, canvasHeight);
  gradient.addColorStop(0, "#000");
  gradient.addColorStop(0.5, backgroundColor);
  return gradient;
};

export const makeTheme = (state) => {
  const CTX = state.get("CTX");
  const canvasHeight = state.get("canvasHeight");
  const worldColors = state.get("world").colors;

  const activeTheme = {
    bodyFontColor: worldColors.bodyFontColor,
    headlineFontColor: worldColors.headlineFontColor,
    infoFontColor: worldColors.infoFontColor,
    background: worldColors.background,
    backgroundGradient: makeSpaceBackgroundGradient(
      CTX,
      canvasHeight,
      worldColors.spaceGradientMid
    ),
    landerGradient: makeLanderGradient(
      CTX,
      worldColors.landerGradientStops[0],
      worldColors.landerGradientStops[1],
      worldColors.landerGradientStops[2],
      worldColors.landerGradientStops[3]
    ),
    toyLanderGradient: (width) =>
      makeLanderGradient(
        CTX,
        worldColors.landerGradientStops[0],
        worldColors.landerGradientStops[1],
        worldColors.landerGradientStops[2],
        worldColors.landerGradientStops[3],
        width
      ),
    asteroid: worldColors.asteroid,
    star: worldColors.star,
    terrain: worldColors.terrain,
    meterGradient: worldColors.meterGradient,
  };

  document.documentElement.style.setProperty(
    "--background",
    activeTheme.background
  );

  document.documentElement.style.setProperty(
    "--body-font-color",
    activeTheme.bodyFontColor
  );

  document.documentElement.style.setProperty(
    "--headline-font-color",
    activeTheme.headlineFontColor
  );

  document.documentElement.style.setProperty(
    "--meter-gradient",
    activeTheme.meterGradient
  );

  return activeTheme;
};
