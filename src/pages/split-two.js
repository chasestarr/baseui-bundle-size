// @flow
import React from "react";
import { Input } from "baseui/input";
import { PhoneInputLite } from "baseui/phone-input";
import { FormControl } from "baseui/form-control";
import { Block } from "baseui/block";

function SplitTwo() {
  return (
    <Block>
      <FormControl label="Enter your phone number">
        <PhoneInputLite />
      </FormControl>
    </Block>
  );
}

export default SplitTwo;
