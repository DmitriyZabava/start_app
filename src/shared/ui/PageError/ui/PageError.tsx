
import * as s from "./PageError.module.scss"
import { classNames } from "shared/lib/ClassNames/classNames";
import { Button } from "shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className } : PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className={classNames(s.PageError , {}, [className])}>
            <p>Упс какая-то ошибка.... </p>
            <Button className="reloadButton" onClick={reloadPage}>Перезагрузить !</Button>
        </div>
    );
};
