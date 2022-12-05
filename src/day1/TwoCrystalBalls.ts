export default function two_crystal_balls(breaks: boolean[]): number {
    const stepSize = Math.floor(Math.sqrt(breaks.length));
    let currIdx = stepSize;

    while (!breaks[currIdx] && currIdx < breaks.length) currIdx += stepSize;
    currIdx -= stepSize;
    while (!breaks[currIdx] && currIdx < breaks.length) currIdx++;

    return currIdx === breaks.length ? -1 : currIdx;
}
