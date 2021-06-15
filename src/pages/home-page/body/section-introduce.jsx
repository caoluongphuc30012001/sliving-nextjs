import React from 'react';
import DataHomepage from "@query/home-page";
import CardSection from "@components/card/card-content/card-section.jsx";
import imgProd from "@images/home-page/body-2/product-v2.svg";
import { useTranslation } from 'react-i18next';
const SectionIntroduce = () => {
  const { t } = useTranslation()
  const data = DataHomepage();
  const dataCard = {
    backgroundColor: '#ffffff',
    color: '#004BA1',
  }
  return (
    <>
      {
        dataCard && (
          <CardSection
            dataImg={imgProd}
            title={t(`Product_Application`)}
            subtitle={data.dataSectionIntroduce.edges[0].node.frontmatter.subTitle}
            description={data.dataSectionIntroduce.edges[0].node.frontmatter.description}
            backgroundColor={dataCard.backgroundColor}
            color={dataCard.color} isButton={true} />
        )
      }
    </>
  );
};
export default SectionIntroduce;
