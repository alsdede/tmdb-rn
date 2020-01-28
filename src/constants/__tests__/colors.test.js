import colors from '../colors';

test('should verify the hex color', () => {
    expect(colors.primaryColor).toBe('#A0A0');
    expect(colors.accentColor).toBe('#708090');
    expect(colors.textColor).toBe('#fff');
});
