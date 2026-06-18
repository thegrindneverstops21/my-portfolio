type TagVariant = 'purple' | 'green' | 'amber' | 'gray';

interface TagProps{
    label: string;
    variant?: TagVariant;
}

const variantStyles: Record<TagVariant, string> = {
    purple: 'bg-accent/10 border-accent/20 text-purple-300',
    green: 'bg-accent2/10 border-accent2/20 text-emarald-300',
    amber: 'bg-yellow-400/10 border-yellow-400/20 text-yellow-300',
    gray: 'bg-muted/10 border-muted/20 text-muted',
};

export default function Tag({label, variant = 'purple'}: TagProps){
    return (
        <span className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg border ${variantStyles[variant]}`}>
            {label}
        </span>
    );
}