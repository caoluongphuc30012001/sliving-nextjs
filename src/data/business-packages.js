import lightingSolutionImg from "@images/business-step1-v3/jpg/lighting-solution.jpg";
import controlSolutionImg from "@images/business-step1-v3/jpg/control-solution.jpg";
import securitySolutionImg from "@images/business-step1-v3/jpg/security-solution.jpg";
import parkingSolutionImg from "@images/business-step1-v3/jpg/parking-solution.jpg";

import bulbIcon from "@images/business-step1-v3/svg/icon-bulb.svg";
import controlIcon from "@images/business-step1-v3/svg/icon-control.svg";
import carIcon from "@images/business-step1-v3/svg/icon-car.svg";
import safetyIcon from "@images/business-step1-v3/svg/icon-safety.svg";

import { useTranslation } from "react-i18next";

const { i18n, t } = useTranslation();

export const packagesData = [
  {
    id: 0,
    title: t("business.packagesData.lighting"),
    link: "/smart-lighting/",
    image: lightingSolutionImg,
    icon: bulbIcon,
  },
  {
    id: 1,
    title: t("business.packagesData.home"),
    link: "/smart-home/",
    image: controlSolutionImg,
    icon: controlIcon,
  },
  {
    id: 2,
    title: t("business.packagesData.building"),
    link: "/smart-building/",
    image: securitySolutionImg,
    icon: safetyIcon,
  },
  {
    id: 3,
    title: t("business.packagesData.parking"),
    link: "/smart-parking/",
    image: parkingSolutionImg,
    icon: carIcon,
  },
];
