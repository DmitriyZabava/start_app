import { lazy } from "react";
import { delayFuncyion } from "shared/lib/Delay/delayFunc";

export const AboutPageAsync = lazy(()=>
    delayFuncyion(import("./AboutPage"))
);
