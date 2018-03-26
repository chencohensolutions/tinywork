export function classList(baseClassName, classStates, propsClassName) {
    var list = (baseClassName) ? baseClassName.split(' ') : [];
    if (propsClassName) {
        var propsList = propsClassName.split(' ');
        list = list.concat(propsList);
    }
    for (var className in classStates) {
        if (classStates[className]) {
            list.push(className);
        }
    }
    return list.join(' ');
};