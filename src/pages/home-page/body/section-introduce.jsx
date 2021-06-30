import React from 'react';
import DataHomepage from "@query/home-page";
import CardSection from "@components/card/card-content/card-section.jsx";
import imgProd from "@images/home-page/body-2/product-v2.svg";
import { useTranslation } from 'react-i18next';
import "@babylonjs/loaders";
const SectionIntroduce = () => {
  const { t } = useTranslation()
  const data = DataHomepage();
  return (
    <>
      {
        data && (
          <CardSection
            title={t(`Product_Application`)}
            dataImg={imgProd}
            subtitle={data.dataSectionIntroduce.edges[0].node.frontmatter.subTitle}
            description={data.dataSectionIntroduce.edges[0].node.frontmatter.description}
            isButton={true} backgroundColor={'#F47403'} color={'#ffffff'} borderReadius={'16px'} border={"none"} padding={'4px 7px 4px 13px'} fontWeight={'700'} />
        )
      }
    </>
  );
};
export default SectionIntroduce;
