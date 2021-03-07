/**
 * 人性化显示创建时间
 *
 * @example
 * ```typescript
 * const timeSpan = humanizePublishedAt(timestamp);
 * // => 刚刚、7小时前、4天前、3周前、3个月前
 * ```
 *
 * @param timestampInMs - 人性化格式化时间
 */
export declare function humanizePublishedAt(timestampInMs: number): string;
/**
 * 人性化展示评论数
 *
 * @param n - 评论数
 */
export declare function humanizeCommentsCount(n: number): string;
