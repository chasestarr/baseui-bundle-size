// @flow
import React from "react";
import { Button } from "baseui/button";
import { PhoneInput } from "baseui/phone-input";

function Home() {
  const [SplitComponent, setSplitComponent] = React.useState(null);

  React.useEffect(() => {
    import("./split.js").then(result => {
      // setSplitComponent(() => result.default);
    });

    import("./split-two.js").then(result => {
      // setSplitComponent(() => result.default);
    });
  }, []);

  return <div>asdf</div>;
}

export default Home;
