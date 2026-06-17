interface SectionHeaderProps{
    eyebrow: string;
    title: string;
    lead?:string;
}

export default function SectionHeader({eyebrow, title, lead}:SectionHeaderProps){
    return(
        <div className = "mb-14">
            <p className = "text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">{eyebrow}</p>
        <h2 className = "font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">{title}</h2>
        {lead &&(
            <p className = "text-muted text-base leading-relaxed max-w-xl">{lead}</p>
        )}
        </div>
    );
}