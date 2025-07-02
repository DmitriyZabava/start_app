
import * as s from "./NotFoundPage.module.scss"
import { classNames } from "shared/lib/ClassNames/classNames";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className } : NotFoundPageProps) => {
    return (
        <div className={classNames(s.NotFoundPage , {}, [className])}>
            <h2>   PAGE NOT FOUND  -  СТРАНИЦА НЕ НАЙДЕНА     </h2>

        </div>
    );
};
