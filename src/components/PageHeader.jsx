import React from "react";
import Heading from "./Heading";
import Breadcrumb from "./Breadcrumb";
import Container from "./Container";

const PageHeader = ({
  breadcrumbMain,
  breadcrumbSign,
  breadcrumbSub,
  heading,
}) => {
  return (
    <div>
      <Container>
        <Heading heading={heading} className={`${className}`} />
        <Breadcrumb
          breadcrumbMain={breadcrumbMain}
          breadcrumbSign={breadcrumbSign}
          breadcrumbSub={breadcrumbSub}
        />
      </Container>
    </div>
  );
};

export default PageHeader;
