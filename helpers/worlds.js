const STORAGE_KEY = "selectedWorld";

export const DEFAULT_WORLD_NAME = "earth";

export const WORLD_OPTIONS = [
  { name: "earth", label: "Earth" },
  { name: "mars", label: "Mars" },
];

const WORLD_CONFIGS = {
  earth: {
    gravity: 0.0035,
    terrain: {
      targetHeightRatio: 0.8,
      displaceRatio: 0.1,
      roughness: 0.75,
      landingMinInset: 40,
    },
    colors: {
      bodyFontColor: "rgba(255, 255, 255, 0.75)",
      headlineFontColor: "#fff",
      infoFontColor: "#fff",
      background: "#02071e",
      spaceGradientMid: "#02071e",
      landerGradientStops: ["#DFE5E5", "#BDBCC3", "#4A4E6F", "#3D4264"],
      asteroid: "#898482",
      star: "#ffffff",
      terrain: "#757579",
      meterGradient:
        "linear-gradient(90deg, hsl(142deg 100% 48%) 0%, hsl(84deg 100% 42%) 6%, hsl(61deg 100% 35%) 15%, hsl(41deg 100% 40%) 29%, hsl(25deg 100% 44%) 50%, hsl(0deg 100% 46%) 100%)",
    },
  },
  mars: {
    gravity: 0.0014,
    terrain: {
      targetHeightRatio: 0.77,
      displaceRatio: 0.14,
      roughness: 0.82,
      landingMinInset: 52,
    },
    colors: {
      bodyFontColor: "rgba(255, 228, 214, 0.82)",
      headlineFontColor: "#ffe0cc",
      infoFontColor: "#ffe4d2",
      background: "#1b0704",
      spaceGradientMid: "#4b130a",
      landerGradientStops: ["#FFE3D3", "#E1B89F", "#9C5E48", "#6A3324"],
      asteroid: "#b7724c",
      star: "#ffe0b8",
      terrain: "#ac4f2f",
      meterGradient:
        "linear-gradient(90deg, hsl(165deg 84% 43%) 0%, hsl(80deg 83% 40%) 14%, hsl(46deg 88% 45%) 32%, hsl(29deg 89% 50%) 55%, hsl(11deg 85% 52%) 78%, hsl(0deg 78% 48%) 100%)",
    },
  },
};

export const getWorldConfig = (worldName = DEFAULT_WORLD_NAME) =>
  WORLD_CONFIGS[worldName] || WORLD_CONFIGS[DEFAULT_WORLD_NAME];

export const getStoredWorldName = () => {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return WORLD_CONFIGS[storedValue] ? storedValue : DEFAULT_WORLD_NAME;
  } catch {
    return DEFAULT_WORLD_NAME;
  }
};

export const storeWorldName = (worldName) => {
  if (!WORLD_CONFIGS[worldName]) return;

  try {
    localStorage.setItem(STORAGE_KEY, worldName);
  } catch {}
};
