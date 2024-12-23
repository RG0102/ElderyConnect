/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Firestore } from './database';
/**
 * A `PersistentCacheIndexManager` for configuring persistent cache indexes used
 * for local query execution.
 *
 * To use, call `getPersistentCacheIndexManager()` to get an instance.
 */
export declare class PersistentCacheIndexManager {
    readonly _firestore: Firestore;
    /** A type string to uniquely identify instances of this class. */
    readonly type: 'PersistentCacheIndexManager';
    /** @hideconstructor */
    constructor(_firestore: Firestore);
}
/**
 * Returns the PersistentCache Index Manager used by the given `Firestore`
 * object.
 *
 * @return The `PersistentCacheIndexManager` instance, or `null` if local
 * persistent storage is not in use.
 */
export declare function getPersistentCacheIndexManager(firestore: Firestore): PersistentCacheIndexManager | null;
/**
 * Enables the SDK to create persistent cache indexes automatically for local
 * query execution when the SDK believes cache indexes can help improve
 * performance.
 *
 * This feature is disabled by default.
 */
export declare function enablePersistentCacheIndexAutoCreation(indexManager: PersistentCacheIndexManager): void;
/**
 * Stops creating persistent cache indexes automatically for local query
 * execution. The indexes which have been created by calling
 * `enablePersistentCacheIndexAutoCreation()` still take effect.
 */
export declare function disablePersistentCacheIndexAutoCreation(indexManager: PersistentCacheIndexManager): void;
/**
 * Removes all persistent cache indexes.
 *
 * Please note this function will also deletes indexes generated by
 * `setIndexConfiguration()`, which is deprecated.
 */
export declare function deleteAllPersistentCacheIndexes(indexManager: PersistentCacheIndexManager): void;
