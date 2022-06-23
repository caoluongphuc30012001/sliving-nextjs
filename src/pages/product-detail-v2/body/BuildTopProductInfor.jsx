import React from "react";

const convertLngData = (deviceType) => {
  if (!deviceType) return null;

  const { nameEn, nameVi, listDescriptionVi, listDescriptionEn } = deviceType;

  return {
    en: {
      name: nameEn,
      listDescription: listDescriptionEn,
    },
    vi: {
      name: nameVi,
      listDescription: listDescriptionVi,
    },
  };
};

function BuildTopProductInfor({ deviceType }) {
  const lngCurrent = i18next.language;

  const data = convertLngData(deviceType);

  return (
    deviceType && (
      <>
        <h6>{data["en"].name}</h6>
        <h2>{data[lngCurrent].name}</h2>
        <p>
          {data[lngCurrent].listDescription.map((des, index) => (
            <li key={index.toString()}>
              <span>{des}</span>
            </li>
          ))}
        </p>
      </>
    )
  );
}

export default BuildTopProductInfor;
