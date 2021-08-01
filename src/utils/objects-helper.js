export const updateObjectInArrey = (items, itemId, objectPropName, newObjectProps) => {
    return items.map(u => {
        if (u[objectPropName] === itemId) {
            return { ...u, ...newObjectProps };
        }
        return u
    })
}