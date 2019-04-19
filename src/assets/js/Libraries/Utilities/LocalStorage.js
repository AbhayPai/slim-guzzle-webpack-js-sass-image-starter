export default function LocalStorage() {
    let Public = this;
    let Data = [];
    let StroredData = null;

    Public.getStoreData = function(storageKey) {
        StroredData = localStorage.getItem(storageKey);

        if (StroredData !== null) {
            Data = JSON.parse(StroredData);
        }

        return Data;
    };

    Public.setStoreData = function(storageKey, data) {
        return localStorage.setItem(storageKey, JSON.stringify(data));
    };

    Public.clearStoreData = function(storageKey) {
        return localStorage.removeItem(storageKey);
    };
}
