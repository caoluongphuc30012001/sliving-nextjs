import React from "react";
import PropTypes from "prop-types";
import Skeleton from "./Skeleton";
import { useTranslation } from "react-i18next";

BuildProductDetail.propTypes = {
  deviceDetail: PropTypes.object,
  isLoading: PropTypes.bool,
};

function formatListContent(content, index) {
  if (!content.includes(":"))
    return (
      <li key={index.toString()} className="desc-item">
        {content}
      </li>
    );

  const strLeft = content.split(":")[0]?.trim();
  const strRight = content.split(":")[1]?.trim();

  const contentLeft = <strong>{`${strLeft}: `}</strong>;

  const contentRight = !strRight.includes("!#") ? (
    <>{strRight}</>
  ) : (
    <>
      {strRight.split("!#").map((item) => (
        <>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- {item}
        </>
      ))}
    </>
  );

  return (
    <li key={index.toString()} className="desc-item">
      {contentLeft} {contentRight}
    </li>
  );
}

export default function BuildProductDetail({
  deviceDetail = {},
  isLoading = true,
}) {
  const { t, ready } = useTranslation();

  if (isLoading)
    return (
      <section className="container-wrap product-info-v3">
        <div className="wrapper-content-product-info">
          <Skeleton width="40%" height="28px" />
          {[...Array(3)].map((item, i) => (
            <Skeleton key={i} width="100%" height="24px" />
          ))}
          <Skeleton width="40%" height="28px" />
          {[...Array(3)].map((item, i) => (
            <Skeleton key={i} width="100%" height="24px" />
          ))}
        </div>
      </section>
    );

  const { listDescription, listSpecification } = deviceDetail;

  return (
    <section className="container-wrap product-info-v3">
      {!(listDescription?.length === 0) && (
        <div className="wrapper-content-product-info">
          {listDescription.length > 0 && (
            <div>
              <h3 className="title">
                {ready && t("productDetail.titleDescription")}
              </h3>
              <ul className="desc-list">
                {listDescription.map((item, index) => {
                  return formatListContent(item, index);
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="wrapper-table-product-specification">
        <div className="table-header">
          {ready && t("productDetail.titleSpecification")}
        </div>
        <table>
          <tbody>
            {listSpecification &&
              listSpecification.map((item, i) => {
                const handleStringContainAtSign = (str) => {
                  const splitData = str.split("@").map((item) => {
                    if (!item.includes(":")) {
                      return {
                        left: `<b>${item}</b>`,
                        right: "",
                      };
                    } else {
                      return {
                        left: `<br>&emsp;&emsp;${item.split(":")[0]}`,
                        right: `<br>${item.split(":")[1]}`,
                      };
                    }
                  });

                  return `<td>${splitData
                    .map((item) => item.left)
                    .join("")}</td><td>${splitData
                    .map((item) => item.right)
                    .join("")}</td>`;
                };

                const result = item.includes("@")
                  ? handleStringContainAtSign(item)
                  : `<td>${item.split(":")[0]?.trim()}</td><td>${item
                      .split(":")[1]
                      ?.trim()}</td>`;

                return (
                  <tr
                    key={i.toString()}
                    dangerouslySetInnerHTML={{ __html: result }}
                  ></tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
