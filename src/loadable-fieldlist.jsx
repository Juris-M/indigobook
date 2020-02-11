import React, {useState, useEffect, useCallback} from "react";
import loadable from "@loadable/component";
import Spinner from "react-spinner";

export default loadable(() => import(/* webpackChunkName: 'fieldlist' */ "./fieldlist.jsx"), {
  fallback: <Spinner />
});
