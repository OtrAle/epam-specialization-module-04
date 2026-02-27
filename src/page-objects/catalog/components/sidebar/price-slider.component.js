const Page = require('../../../base.page');

class PriceSlider extends Page {

    get handleMin() { return $('.ngx-slider-pointer-min'); }
    get handleMax() { return $('.ngx-slider-pointer-max'); }
    get displayedMinPrice() { return $('.ngx-slider-model-value'); }
    get displayedMaxPrice() { return $('.ngx-slider-model-high'); }

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

    async dragHandle(handle, targetValue, currentValue, pxPerUnit) {
        if (currentValue === targetValue) return;

        const dragX = Math.round((targetValue - currentValue) * pxPerUnit);
        await handle.dragAndDrop({ x: dragX, y: 0 });

        await this.adjustWithKeys(handle, targetValue);
    }

    async adjustWithKeys(handle, targetValue) {
        const realValue = await this.getHandleValue(handle);
        const diff = targetValue - realValue;
        if (diff !== 0) {
            await handle.click();
            const key = diff > 0 ? 'ArrowRight' : 'ArrowLeft';
            await browser.keys(Array(Math.abs(diff)).fill(key));
        }
    }

    async getDisplayedRange() {
        const combined = $('.ngx-slider-combined');
        const isCombined = (await combined.getCSSProperty('opacity')).value === '1';

        if (isCombined) {
            await browser.waitUntil(
                async () => (await combined.getText()) !== '',
                { timeout: 3000 }
            );
            
            const text = await combined.getText();
            const [min, max] = text.split(' - ').map(Number);
            return { min, max };
        }

        const [min, max] = await Promise.all([
            this.displayedMinPrice.getText(),
            this.displayedMaxPrice.getText(),
        ]);
        
        return { min: Number(min), max: Number(max) };
    }

    async getHandleValue(handle) {
        return Number(await handle.getAttribute('aria-valuenow'));
    }

    async getHandlePosition(handle) {
        const left = await handle.getCSSProperty('left');
        return parseFloat(left.value);
    }
}

module.exports = new PriceSlider();