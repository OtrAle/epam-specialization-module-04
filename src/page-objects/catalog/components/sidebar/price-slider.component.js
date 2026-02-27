const Page = require('../../../base.page');

class PriceSlider extends Page {

    get handleMin() { return $('.ngx-slider-pointer-min'); }
    get handleMax() { return $('.ngx-slider-pointer-max'); }

        
    async setSliderRange(targetMin, targetMax) {
        const [minLeft, maxLeft, minValue, maxValue] = await Promise.all([
            this.getHandlePosition(this.handleMin),
            this.getHandlePosition(this.handleMax),
            this.getHandleValue(this.handleMin),
            this.getHandleValue(this.handleMax),
        ]);

        const pxPerUnit = (maxLeft - minLeft) / (maxValue - minValue);

        await this.dragHandle(this.handleMax, targetMax, maxValue, pxPerUnit);
        await this.dragHandle(this.handleMin, targetMin, minValue, pxPerUnit);
    }


    async getHandleValue(handle) {
        return Number(await handle.getAttribute('aria-valuenow'));
    }

    async getHandlePosition(handle) {
        const left = await handle.getCSSProperty('left');
        return parseFloat(left.value);
    }


    async dragHandle(handle, targetValue, currentValue, pxPerUnit) {
        if (currentValue === targetValue) return;

        const dragX = Math.round((targetValue - currentValue) * pxPerUnit);
        await handle.dragAndDrop({ x: dragX, y: 0 });
    }
}

module.exports = new PriceSlider();