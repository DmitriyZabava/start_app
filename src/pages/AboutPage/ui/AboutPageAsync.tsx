import { lazy } from "react";

export const AboutPageAsync = lazy(() =>
    new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setTimeout(() => resolve( import("./AboutPage") ), 4000); // Жёсткая задержка 4 сек
    })
);
