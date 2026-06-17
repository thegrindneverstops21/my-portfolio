import {ReactNode} from 'react';

interface ButtonProps{
    children: ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    onClick:() => void;
    className?: string;
    external: boolean;
}

export default function Button({children, variant = 'primary', href, onClick, className = "", external = false,}: ButtonProps){
    const base = 'inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200';
    const styles = {
        primary: 'bg-accent hover:bg-accent/85 text-white hover:-translate-y-0.5',
        outline: 'border border-white/20 hover:border-accent hover:text-accent text-white',
    };

    const classes = '${base} ${styles[variant]} ${className}';
    const props = external ? {target:'_blank', rel:'noopener noreferer'}:{};

    if(href){
        return <a href={href} className={classes} {...props}>{children}</a>;
    }

    return(
        <button onClick={onClick} className={classes}>{children}</button>
    );
}