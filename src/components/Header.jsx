import React from "react";

import EcoIcon from "@material-ui/icons/Eco";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";

function Header() {
  return (
    <header>
      <h1>
        <EmojiNatureIcon />
        <EcoIcon /> Notes Keeper
      </h1>
    </header>
  );
}

export default Header;
