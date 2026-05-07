type UnderlineProps = {
    color?: string;
    className?: string;
};

export default function Underline({
    color = "#00C97A",
    className = ""
}: UnderlineProps) {
    return (
        <div
            className={`h-[2px] my-4 ${className}`}
            style={{
                background: `linear-gradient(to right, ${color}10, ${color}, ${color}10)`
            }}
        />
    );
}