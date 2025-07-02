
import * as s from "./PageLoader.module.scss"
import { classNames } from "shared/lib/ClassNames/classNames";
import { Loader } from "shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className } : PageLoaderProps) => {
    return (
        <div className={classNames(s.PageLoader , {}, [className])}>
            <Loader/>
        </div>
    );
};
