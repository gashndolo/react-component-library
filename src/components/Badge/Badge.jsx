import clsx from "clsx"

export default function Badge({children, shape, color}) {
    let shapeClass = shape && `badge-${shape}`
    let colorClass = color && `badge-${color}`
    const classes = clsx('badge', shapeClass, colorClass)
    return (
        <div className={classes}>
            {children}
        </div>
    )
}