import * as React from "react";
import LayoutV3 from "../../components/layout-v3";
import { Link } from "gatsby";
import imgComingSoon from "@images/coming-soon/img-coming-soon.png";

import "./style.scss";
import Seo from "../../components/seo";

function ComingSoon() {
  return (
    <LayoutV3>
      <Seo title="Coming soon | Sliving" />
      <section className="container-child not-found">
        <img src={imgComingSoon} alt="not found" className="img-not-found" />
        <h3>Sắp ra mắt !!!</h3>
        <span className="desc-404 desc-coming-soon">
          Chúng tôi đang trong quá trình hoàn thiện sản phẩm/giải pháp ,hãy tham
          khảo thêm các sản phẩm khác của chúng tôi
        </span>
        <Link href="/">
          <button type="button" className="btn-home">
            <span>Về trang chủ</span>
          </button>
        </Link>
      </section>
    </LayoutV3>
  );
}

export default ComingSoon;
