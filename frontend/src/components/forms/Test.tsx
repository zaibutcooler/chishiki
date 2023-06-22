import React, { useState } from "react";

const Test = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return <div>{openSearchBar ? <div>Navbar</div> : <div>Searchbar</div>}</div>;
};

export default Test;
