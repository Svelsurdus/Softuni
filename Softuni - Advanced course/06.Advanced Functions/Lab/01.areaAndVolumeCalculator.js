function areaAndVolCalculator(area, vol, data) {
    data = JSON.parse(data);
    let result = [];

    for (let entry of data) {
        let calculatedArea = area.call(entry);
        let calculatedVolume = vol.call(entry);

        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        });
    }
    return result;
}

let area = function area() {
    return Math.abs(this.x * this.y);
};

let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};

areaAndVolCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);