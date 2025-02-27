const setup = () => {
    const Toolbelt = window.Toolbelt = window.Toolbelt || {};
    const Blazor = Toolbelt.Blazor = Toolbelt.Blazor || {};
    Blazor.getProperty = (identifier) => identifier
        .replace(/^window\./, '')
        .split('.')
        .reduce((prev, curr) => typeof (prev) === "undefined" || prev === null ? prev : prev[curr], window);
};

export function beforeWebStart() {
    setup();
}
export function beforeStart() {
    setup();
}