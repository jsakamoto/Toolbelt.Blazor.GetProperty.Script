export const beforeStart = () => {
    (function (Toolbelt) {
        var Blazor;
        (function (Blazor) {
            Blazor.getProperty = (identifier) => identifier
                    .replace(/^window\./, '')
                    .split('.')
                    .reduce((prev, curr) => typeof (prev) === "undefined" || prev === null ? prev : prev[curr], window);
        })(Blazor = Toolbelt.Blazor || (Toolbelt.Blazor = {}));
    })(window.Toolbelt || (window.Toolbelt = {}));
}