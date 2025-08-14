// src/utils/asyncHandler.ts
export async function asyncHandler<T>(
  promise: Promise<T>
): Promise<[Error | null, T | null]> {
  try {
    const data = await promise;
    return [null, data];
  } catch (err: any) {
    const error =
      err instanceof Error ? err : new Error(err?.message || "Unknown error");
    return [error, null];
  }
}
