import React from "react";
import SectionDropdown from "@components/common/drop-down/section-dropdown";
import image1 from "@images/smart-lighting-v3/jpg/image1.jpg";
import image2 from "@images/smart-lighting-v3/jpg/image2.jpg";
import image3 from "@images/smart-lighting-v3/jpg/image3.jpg";
import image4 from "@images/smart-lighting-v3/jpg/image4.jpg";
import image5 from "@images/smart-lighting-v3/jpg/image5.jpg";
import image6 from "@images/smart-lighting-v3/jpg/image6.jpg";
import image7 from "@images/smart-lighting-v3/jpg/image7.jpg";

import { useTranslation } from "next-i18next";

const SectionAboutUs = () => {
  const { t } = useTranslation("smartLighting");

  const listItem = [
    {
      id: 0,
      title: `${t("sectionAboutUs.item0")}`,
      content: `${t("sectionAboutUs.content0")}`,
      image: image1,
    },
    {
      id: 1,
      title: `${t("sectionAboutUs.item1")}`,
      content: `${t("sectionAboutUs.content1")}`,
      image: image2,
    },
    {
      id: 2,
      title: `${t("sectionAboutUs.item2")}`,
      content: `${t("sectionAboutUs.content2")}`,
      image: image3,
    },
    {
      id: 3,
      title: `${t("sectionAboutUs.item3")}`,
      content: `${t("sectionAboutUs.content3")}`,
      image: image4,
    },
    {
      id: 4,
      title: `${t("sectionAboutUs.item4")}`,
      content: `${t("sectionAboutUs.content4")}`,
      image: image5,
    },
    {
      id: 5,
      title: `${t("sectionAboutUs.item5")}`,
      content: `${t("sectionAboutUs.content5")}`,
      image: image6,
    },
    {
      id: 6,
      title: `${t("sectionAboutUs.item6")}`,
      content: `${t("sectionAboutUs.content6")}`,
      image: image7,
    },
  ];
  return <SectionDropdown listItem={listItem} />;
};

export default SectionAboutUs;
