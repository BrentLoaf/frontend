type CardProps = {
    children: React.ReactNode;
    borderColor?: string;
    wrapperClassName?: string;
    className?: string;
    color?: string;
};

export default function Card({
    children,
    borderColor = "#ffffff25",
    wrapperClassName = "",
    className = "",
    color = "#00000020"
}: CardProps) {
    return (
        <div className={`p-10 ${wrapperClassName}`}>
            <div
                style={{
                    borderColor,
                    backgroundColor: `${color}`
                }}
                className={`backdrop-blur px-8 py-6 rounded-xl text-center shadow-2xl border-2 max-w-3xl ${className}`}
            >
                {children}
            </div>
        </div>
    );
}