import { calculateStdDev } from './stddev';

describe('calculateStdDev', () => {
    it('should return the correct standard deviation for column 1', () => {
        const col1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
        const stdDevCol1 = calculateStdDev(col1);
        expect(stdDevCol1).toBeCloseTo(572.03, 2);
    });

    it('should return the correct standard deviation for column 2', () => {
        const col2 = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
        const stdDevCol2 = calculateStdDev(col2);
        expect(stdDevCol2).toBeCloseTo(62.26, 2);
    });
});
