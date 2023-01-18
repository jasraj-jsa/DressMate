const BasePath = "/assets";

export const Disclaimer = {
  Coder: `${BasePath}/Disclaimer/Coder.png`,
  Voldemort: `${BasePath}/Disclaimer/Voldemort.png`,
};

export const About = { Agnes: `${BasePath}/About/Agnes1.png`, Batman: `${BasePath}/About/Batman2.png` };

export const Gender = {
  Male: [`${BasePath}/Gender/batman1.svg`, `${BasePath}/Gender/batman2.svg`],
  Female: [`${BasePath}/Gender/Agnes.svg`, `${BasePath}/Gender/Agnes1.svg`],
};

export const StepsOrder = ["Gender", "Headwear", "Outfit", "FootAcc", "Occasion"];

export const Steps = {
  Headwear: {
    Male: [`${BasePath}/Headwear/Minion1.png`, `${BasePath}/Headwear/beanie.png`],
    Female: [`${BasePath}/Headwear/Edith1.png`, `${BasePath}/Headwear/beanie1.png`],
  },
  Outfit: {
    Male: [`${BasePath}/Outfit/Woody.png`, `${BasePath}/Outfit/HP.png`],
    Female: [`${BasePath}/Outfit/Jessie.png`, `${BasePath}/Outfit/Hermoine.png`],
  },
  FootAcc: {
    Male: [`${BasePath}/FootAcc/PIB.png`, `${BasePath}/FootAcc/Acc.png`],
    Female: [`${BasePath}/FootAcc/PIB1.png`, `${BasePath}/FootAcc/Footwear.png`],
  },
  Occasion: {
    Male: [`${BasePath}/Occasion/Frozen1.png`, `${BasePath}/Occasion/Tangled1.png`],
    Female: [`${BasePath}/Occasion/Frozen.png`, `${BasePath}/Occasion/Tangled.png`],
  },
};
