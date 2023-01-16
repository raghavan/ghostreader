/**
 * The cosine similarity is a measure of similarity between two vectors of an inner product space
 * that measures the cosine of the angle between them.
 *
 * @param x The first vector.
 * @param y The second vector.
 * @returns The cosine similarity.
 */

export function computeCosineSimilarityBetween(x: number[], y: number[]) {
    const dotProductXY = x.map((val, i) => val * y[i]).reduce((accum, curr) => accum + curr, 0);
    const magnitudeX = computeMagnitudeOfAVector(x);
    const magnitudeY = computeMagnitudeOfAVector(y);

    return dotProductXY / (magnitudeX * magnitudeY);
}

/**
 * The magnitude of a vector is the length of the vector.
 * It is the square root of the sum of the squares of the vector's components.
 *
 * @param v
 * @returns The magnitude of the vector.
 */
function computeMagnitudeOfAVector(v: number[]) {
    return Math.sqrt(v.reduce((accum, curr) => accum + Math.pow(curr, 2), 0));
}