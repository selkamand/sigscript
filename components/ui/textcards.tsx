import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TextCardsLinkedProps = {
    title: string;
    description: string;
    icon?: any;
    classNameIcon?: string;
    classNameTitle?: string;
    classNameDescription?: string;
    href?: string;
};

export default function TextCardsLinked({ title, description, icon = faBook, classNameIcon = "text-blue-800", classNameTitle = "text-blue-600 font-semibold", classNameDescription = "text-sm text-gray-800 font-light", href = "#" }: TextCardsLinkedProps) {
    return (
        <a className="rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href={href} target="_blank">
            {/* Icon */}
            <div className="col-span-12 md:col-span-1">
                <FontAwesomeIcon icon={icon} className={classNameIcon} />
            </div>
            {/* Title */}
            <div className="col-span-11 xl:-ml-5">
                <p className={classNameTitle}>{title}</p>
            </div>
            {/* Description */}
            <div className="md:col-start-2 col-span-11 xl:-ml-5">
                <p className={classNameDescription}>{description}</p>
            </div>
        </a>
    );
}
