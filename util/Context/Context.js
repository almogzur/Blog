import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const FavoritesContext = React.createContext(null)
const IsReviewSideBarCollapsedContext = React.createContext(null)
const SerchBarlocatonContaxt = React.createContext(null)
const PageWidthContext = React.createContext(null)

export{
    FavoritesContext,
    IsReviewSideBarCollapsedContext,
    SerchBarlocatonContaxt,
    PageWidthContext,
}