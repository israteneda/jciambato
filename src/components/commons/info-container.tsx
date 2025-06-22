interface InfoContainerProps {
    subtitle: string;
    title: string;
    description: string;
}

export default function InfoContainer({ subtitle, title, description }: InfoContainerProps) {
    return (
        <div className="relative z-30 bg-transparent max-w-6xl mx-8 md:mx-auto ">
            <h2 className="text-xs leading-[1.85] not-italic uppercase text-cyan-600 font-bold tracking-normal">
                {subtitle}
            </h2>

            <div className="mt-8">
                <h1 className="text-3xl lg:text-6xl font-bold not-italic text-left leading-[1] tracking-[-0.5px] text-gray-900 max-w-4xl">
                    {title}
                </h1>
            </div>

            <div className="mt-9">
                <p className="text-xl font-normal not-italic leading-[1.45] tracking-normal text-gray-900 text-left max-w-xl">
                    {description}
                </p>
            </div>
        </div>
    );
}