import clsx from "clsx"

export default function Button({children, variant, size, ...rest}) {
    let sizeClass = size && `button-${size}`
    let variantClass = variant && `button-${variant}`
    const classes = clsx(variantClass, sizeClass)

    return (
        <button
            className={classes}
            {...rest}
        >
            {children}
        </button>
    )
}