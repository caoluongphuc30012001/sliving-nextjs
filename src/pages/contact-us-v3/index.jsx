import React from "react";
import SectionHelpMore from "../../components/help-more/section-help-more";
import LayoutV3 from "../../components/layout-v3";
import Seo from "@components/seo";

import "./style.scss";
import SectionQuickSupport from "./body/section-quick-support";
import SectionFormContact from "./body/section-form-contact";

function ContactPage() {
  return (
    <LayoutV3>
      <Seo title="Sliving" description="Sliving" url="https://sliving.vn" />
      <main id="contact-page-v3">
        <SectionQuickSupport />
        <SectionFormContact />
        <SectionHelpMore />
      </main>
    </LayoutV3>
  );
}

export default ContactPage;
