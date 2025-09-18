/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

/**
 * 
 * Represents an art book, which is a type of collectable item.
 */
export type ArtBook = {
  __typename?: 'ArtBook';
  baseCollectable: BaseCollectable;
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isbn?: Maybe<Scalars['String']['output']>;
  publisher: Publisher;
  updatedAt: Scalars['String']['output'];
};

export type ArtBookFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publisherId?: InputMaybe<Scalars['ID']['input']>;
};

export type ArtBookInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publisherId: Scalars['ID']['input'];
};

/**
 * 
 * Represents a base collectable item, which can be extended by specific types like art books.
 */
export type BaseCollectable = {
  __typename?: 'BaseCollectable';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  initialPrice: Scalars['String']['output'];
  marketPrice: Scalars['String']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type BaseCollectableFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  initialPrice?: InputMaybe<Scalars['String']['input']>;
  marketPrice?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type BaseCollectableInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl: Scalars['String']['input'];
  initialPrice: Scalars['String']['input'];
  marketPrice: Scalars['String']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

/**
 * 
 * Represents a brand, which is a company or organization that produces collectable items.
 */
export type Brand = {
  __typename?: 'Brand';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type BrandFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrandInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logoUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents a trading card, which is a type of collectable item.
 */
export type Card = {
  __typename?: 'Card';
  baseCollectable: BaseCollectable;
  brand: Brand;
  cardNumber: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  rarity: CardRarity;
  series?: Maybe<Series>;
  set: CardSet;
  updatedAt: Scalars['String']['output'];
};

export type CardFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rarityId?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  setId?: InputMaybe<Scalars['ID']['input']>;
};

export type CardInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  cardNumber: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  rarityId: Scalars['ID']['input'];
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  setId: Scalars['ID']['input'];
};

/**
 * 
 * Represents the type of a card product, such as a booster box or pack.
 */
export type CardProductType = {
  __typename?: 'CardProductType';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CardProductTypeFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CardProductTypeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents the rarity of a card, indicating how the card is printed.
 */
export type CardRarity = {
  __typename?: 'CardRarity';
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CardRarityFilter = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CardRarityInput = {
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents a set of cards, which is a collection of cards released together.
 */
export type CardSet = {
  __typename?: 'CardSet';
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  series: Series;
  updatedAt: Scalars['String']['output'];
};

export type CardSetFilter = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
};

export type CardSetInput = {
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  seriesId: Scalars['ID']['input'];
};

/**
 * 
 * Represents a collectable item, which cannot be represented by more defined collectable types.
 */
export type Collectable = {
  __typename?: 'Collectable';
  baseCollectable: BaseCollectable;
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  series?: Maybe<Series>;
  skuId: Scalars['String']['output'];
  type: CollectableType;
  updatedAt: Scalars['String']['output'];
};

export type CollectableFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  skuId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['ID']['input']>;
};

export type CollectableInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  skuId: Scalars['String']['input'];
  typeId: Scalars['ID']['input'];
};

/**
 * 
 * Represents a collectable type, which can be a specific category of collectable items.
 * excludes: ArtBooks, Cards, Sealed Cards, Shoes, and Video Games.
 */
export type CollectableType = {
  __typename?: 'CollectableType';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CollectableTypeFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectableTypeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents a video game console.
 */
export type Console = {
  __typename?: 'Console';
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ConsoleFilter = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ConsoleInput = {
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests
   * Error Type: UNAVAILABLE
   */
  TooManyRequests = 'TOO_MANY_REQUESTS',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN'
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * 
   * Creates a new art book.
   */
  createArtBook: ArtBook;
  /**
   * 
   * Creates a new brand.
   */
  createBrand: Brand;
  /**
   * 
   * Creates a new card.
   */
  createCard: Card;
  /**
   * 
   * Creates a new card product type.
   */
  createCardProductType: CardProductType;
  /**
   * 
   * Creates a new card rarity.
   */
  createCardRarity: CardRarity;
  /**
   * 
   * Creates a new card set.
   */
  createCardSet: CardSet;
  /**
   * 
   * Creates a new collectable.
   */
  createCollectable: Collectable;
  /**
   * 
   * Creates a new Collectable Type.
   */
  createCollectableType: CollectableType;
  /**
   * 
   * Creates a new video game console.
   */
  createConsole: Console;
  /**
   * 
   * Creates a new publisher.
   */
  createPublisher: Publisher;
  /**
   * 
   * Creates a new sealed card product.
   */
  createSealedCardProduct: SealedCardProduct;
  /**
   * 
   * Creates a new series.
   */
  createSeries: Series;
  /**
   * 
   * Creates a new shoe.
   */
  createShoe: Shoe;
  /**
   * 
   * Creates a new shoe model.
   */
  createShoeModel: ShoeModel;
  /**
   * 
   * Creates a new video game.
   */
  createVideoGame: VideoGame;
  /**
   * 
   * Deletes an art book by its ID.
   */
  deleteArtBook: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a brand by its ID.
   */
  deleteBrand: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a card by its ID.
   */
  deleteCard: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a card product type by its ID.
   */
  deleteCardProductType: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a card rarity by its ID.
   */
  deleteCardRarity: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a card set by its ID.
   */
  deleteCardSet: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a collectable by its ID.
   */
  deleteCollectable: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a Collectable Type by its ID.
   */
  deleteCollectableType: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a video game console by its ID.
   */
  deleteConsole: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a publisher by its ID.
   */
  deletePublisher: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a sealed card product by its ID.
   */
  deleteSealedCardProduct: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a series by its ID.
   */
  deleteSeries: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a shoe by its ID.
   */
  deleteShoe: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a shoe model by its ID.
   */
  deleteShoeModel: Scalars['Boolean']['output'];
  /**
   * 
   * Deletes a video game by its ID.
   */
  deleteVideoGame: Scalars['Boolean']['output'];
  /**
   * 
   * Updates an existing art book.
   */
  updateArtBook: ArtBook;
  /**
   * 
   * Updates an existing brand.
   */
  updateBrand: Brand;
  /**
   * 
   * Updates an existing card.
   */
  updateCard: Card;
  /**
   * 
   * Updates an existing card product type.
   */
  updateCardProductType: CardProductType;
  /**
   * 
   * Updates an existing card rarity.
   */
  updateCardRarity: CardRarity;
  /**
   * 
   * Updates an existing card set.
   */
  updateCardSet: CardSet;
  /**
   * 
   * Updates an existing collectable.
   */
  updateCollectable: Collectable;
  /**
   * 
   * Updates an existing Collectable Type.
   */
  updateCollectableType: CollectableType;
  /**
   * 
   * Updates an existing video game console.
   */
  updateConsole: Console;
  /**
   * 
   * Updates an existing publisher.
   */
  updatePublisher: Publisher;
  /**
   * 
   * Updates an existing sealed card product.
   */
  updateSealedCardProduct: SealedCardProduct;
  /**
   * 
   * Updates an existing series.
   */
  updateSeries: Series;
  /**
   * 
   * Updates an existing shoe.
   */
  updateShoe: Shoe;
  /**
   * 
   * Updates an existing shoe model.
   */
  updateShoeModel: ShoeModel;
  /**
   * 
   * Updates an existing video game.
   */
  updateVideoGame: VideoGame;
};


export type MutationCreateArtBookArgs = {
  input: ArtBookInput;
};


export type MutationCreateBrandArgs = {
  input: BrandInput;
};


export type MutationCreateCardArgs = {
  input: CardInput;
};


export type MutationCreateCardProductTypeArgs = {
  input: CardProductTypeInput;
};


export type MutationCreateCardRarityArgs = {
  input: CardRarityInput;
};


export type MutationCreateCardSetArgs = {
  input: CardSetInput;
};


export type MutationCreateCollectableArgs = {
  input: CollectableInput;
};


export type MutationCreateCollectableTypeArgs = {
  input: CollectableTypeInput;
};


export type MutationCreateConsoleArgs = {
  input: ConsoleInput;
};


export type MutationCreatePublisherArgs = {
  input: PublisherInput;
};


export type MutationCreateSealedCardProductArgs = {
  input: SealedCardProductInput;
};


export type MutationCreateSeriesArgs = {
  input: SeriesInput;
};


export type MutationCreateShoeArgs = {
  input: ShoeInput;
};


export type MutationCreateShoeModelArgs = {
  input: ShoeModelInput;
};


export type MutationCreateVideoGameArgs = {
  input: VideoGameInput;
};


export type MutationDeleteArtBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCardArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCardProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCardRarityArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCardSetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectableTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteConsoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePublisherArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSealedCardProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSeriesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShoeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShoeModelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVideoGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateArtBookArgs = {
  input: ArtBookInput;
};


export type MutationUpdateBrandArgs = {
  input: BrandInput;
};


export type MutationUpdateCardArgs = {
  input: CardInput;
};


export type MutationUpdateCardProductTypeArgs = {
  input: CardProductTypeInput;
};


export type MutationUpdateCardRarityArgs = {
  input: CardRarityInput;
};


export type MutationUpdateCardSetArgs = {
  input: CardSetInput;
};


export type MutationUpdateCollectableArgs = {
  input: CollectableInput;
};


export type MutationUpdateCollectableTypeArgs = {
  input: CollectableTypeInput;
};


export type MutationUpdateConsoleArgs = {
  input: ConsoleInput;
};


export type MutationUpdatePublisherArgs = {
  input: PublisherInput;
};


export type MutationUpdateSealedCardProductArgs = {
  input: SealedCardProductInput;
};


export type MutationUpdateSeriesArgs = {
  input: SeriesInput;
};


export type MutationUpdateShoeArgs = {
  input: ShoeInput;
};


export type MutationUpdateShoeModelArgs = {
  input: ShoeModelInput;
};


export type MutationUpdateVideoGameArgs = {
  input: VideoGameInput;
};

/**
 * 
 * Represents a publisher, which is a company or organization that publishes collectable items.
 */
export type Publisher = {
  __typename?: 'Publisher';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PublisherFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PublisherInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  logoUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /**
   * 
   * Fetches a specific art book by its ID.
   */
  artBook?: Maybe<ArtBook>;
  /**
   * 
   * Fetches a list of art books filtered by an input.
   */
  artBooks: Array<ArtBook>;
  /**
   * 
   * Fetches a specific brand by its ID.
   */
  brand?: Maybe<Brand>;
  /**
   * 
   * Fetches a list of brands filtered by an input.
   */
  brands: Array<Brand>;
  /**
   * 
   * Fetches a specific card by its ID.
   */
  card?: Maybe<Card>;
  /**
   * 
   * Fetches a specific card product type by its ID.
   */
  cardProductType?: Maybe<CardProductType>;
  /**
   * 
   * Fetches a list of card product types filtered by an input.
   */
  cardProductTypes: Array<CardProductType>;
  /**
   * 
   * Fetches a list of card rarities filtered by an input.
   */
  cardRarities: Array<CardRarity>;
  /**
   * 
   * Fetches a specific card rarity by its ID.
   */
  cardRarity?: Maybe<CardRarity>;
  /**
   * 
   * Fetches a specific card set by its ID.
   */
  cardSet?: Maybe<CardSet>;
  /**
   * 
   * Fetches a list of card sets filtered by an input.
   */
  cardSets: Array<CardSet>;
  /**
   * 
   * Fetches a list of cards filtered by an input.
   */
  cards: Array<Card>;
  /**
   * 
   * Fetches a specific collectable by its ID.
   */
  collectable?: Maybe<Collectable>;
  /**
   * 
   * Fetches a specific type of collectable by its ID.
   */
  collectableType?: Maybe<CollectableType>;
  /**
   * 
   * Fetches a list of types of collectables filtered by an input.
   */
  collectableTypes: Array<CollectableType>;
  /**
   * 
   * Fetches a list of collectables filtered by an input.
   */
  collectables: Array<Collectable>;
  /**
   * 
   * Fetches a specific video game console by its ID.
   */
  console?: Maybe<Console>;
  /**
   * 
   * Fetches a list of video game consoles filtered by an input.
   */
  consoles: Array<Console>;
  /**
   * 
   * Fetches a specific publisher by its ID.
   */
  publisher?: Maybe<Publisher>;
  /**
   * 
   * Fetches a list of publishers filtered by an input.
   */
  publishers: Array<Publisher>;
  /**
   * 
   * Fetches a specific sealed card product by its ID.
   */
  sealedCardProduct?: Maybe<SealedCardProduct>;
  /**
   * 
   * Fetches a list of sealed card products filtered by an input.
   */
  sealedCardProducts: Array<SealedCardProduct>;
  /**
   * 
   * Fetches a list of series filtered by an input.
   */
  series: Array<Series>;
  /**
   * 
   * Fetches a specific series by its ID.
   */
  seriesById?: Maybe<Series>;
  /**
   * 
   * Fetches a specific shoe by its ID.
   */
  shoe?: Maybe<Shoe>;
  /**
   * 
   * Fetches a specific shoe model by its ID.
   */
  shoeModel?: Maybe<ShoeModel>;
  /**
   * 
   * Fetches a list of shoe models filtered by an input.
   */
  shoeModels: Array<ShoeModel>;
  /**
   * 
   * Fetches a list of shoes filtered by an input.
   */
  shoes: Array<Shoe>;
  /**
   * 
   * Fetches a specific video game by its ID.
   */
  videoGame?: Maybe<VideoGame>;
  /**
   * 
   * Fetches a list of video games filtered by an input.
   */
  videoGames: Array<VideoGame>;
};


export type QueryArtBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArtBooksArgs = {
  filter?: InputMaybe<ArtBookFilter>;
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandsArgs = {
  filter?: InputMaybe<BrandFilter>;
};


export type QueryCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardProductTypesArgs = {
  filter?: InputMaybe<CardProductTypeFilter>;
};


export type QueryCardRaritiesArgs = {
  filter?: InputMaybe<CardRarityFilter>;
};


export type QueryCardRarityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardSetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardSetsArgs = {
  filter?: InputMaybe<CardSetFilter>;
};


export type QueryCardsArgs = {
  filter?: InputMaybe<CardFilter>;
};


export type QueryCollectableArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectableTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectableTypesArgs = {
  filter?: InputMaybe<CollectableTypeFilter>;
};


export type QueryCollectablesArgs = {
  filter?: InputMaybe<CollectableFilter>;
};


export type QueryConsoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsolesArgs = {
  filter?: InputMaybe<ConsoleFilter>;
};


export type QueryPublisherArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPublishersArgs = {
  filter?: InputMaybe<PublisherFilter>;
};


export type QuerySealedCardProductArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySealedCardProductsArgs = {
  filter?: InputMaybe<SealedCardProductFilter>;
};


export type QuerySeriesArgs = {
  filter?: InputMaybe<SeriesFilter>;
};


export type QuerySeriesByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShoeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShoeModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShoeModelsArgs = {
  filter?: InputMaybe<ShoeModelFilter>;
};


export type QueryShoesArgs = {
  filter?: InputMaybe<ShoeFilter>;
};


export type QueryVideoGameArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVideoGamesArgs = {
  filter?: InputMaybe<VideoGameFilter>;
};

/**
 * 
 * Represents a specific sealed card product, such as a booster box or pack.
 */
export type SealedCardProduct = {
  __typename?: 'SealedCardProduct';
  baseCollectable: BaseCollectable;
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  series?: Maybe<Series>;
  set: CardSet;
  skuId: Scalars['String']['output'];
  type: CardProductType;
  updatedAt: Scalars['String']['output'];
};

export type SealedCardProductFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  setId?: InputMaybe<Scalars['ID']['input']>;
  skuId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['ID']['input']>;
};

export type SealedCardProductInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  setId: Scalars['ID']['input'];
  skuId: Scalars['String']['input'];
  typeId: Scalars['ID']['input'];
};

/**
 * 
 * Represents an intellectual property series
 */
export type Series = {
  __typename?: 'Series';
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type SeriesFilter = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SeriesInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents a shoe, which is a type of collectable item.
 */
export type Shoe = {
  __typename?: 'Shoe';
  baseCollectable: BaseCollectable;
  brand: Brand;
  color: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  model: ShoeModel;
  size: Scalars['String']['output'];
  skuId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ShoeFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  modelId?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  skuId?: InputMaybe<Scalars['String']['input']>;
};

export type ShoeInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  color: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  modelId: Scalars['ID']['input'];
  size: Scalars['String']['input'];
  skuId: Scalars['String']['input'];
};

/**
 * 
 * Represents a shoe model, which is the form factor of a shoe.
 */
export type ShoeModel = {
  __typename?: 'ShoeModel';
  brand: Brand;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ShoeModelFilter = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ShoeModelInput = {
  brandId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

/**
 * 
 * Represents a video game, which is a type of collectable item.
 */
export type VideoGame = {
  __typename?: 'VideoGame';
  baseCollectable: BaseCollectable;
  brand: Brand;
  console: Console;
  createdAt: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  publisher: Publisher;
  series?: Maybe<Series>;
  skuId: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type VideoGameFilter = {
  baseCollectable?: InputMaybe<BaseCollectableFilter>;
  brandId?: InputMaybe<Scalars['ID']['input']>;
  consoleId?: InputMaybe<Scalars['ID']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  publisherId?: InputMaybe<Scalars['ID']['input']>;
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  skuId?: InputMaybe<Scalars['String']['input']>;
};

export type VideoGameInput = {
  baseCollectable: BaseCollectableInput;
  brandId: Scalars['ID']['input'];
  consoleId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  publisherId: Scalars['ID']['input'];
  seriesId?: InputMaybe<Scalars['ID']['input']>;
  skuId: Scalars['String']['input'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String']['output'];
};

export type BrandFragmentFragment = { __typename?: 'Brand', id: string, name: string, description?: string | null, logoUrl: string, deleted: boolean } & { ' $fragmentName'?: 'BrandFragmentFragment' };

export type GetAllBrandsQueryVariables = Exact<{
  filter?: InputMaybe<BrandFilter>;
}>;


export type GetAllBrandsQuery = { __typename?: 'Query', brands: Array<{ __typename?: 'Brand', id: string, name: string, description?: string | null, logoUrl: string, deleted: boolean }> };

export type GetBrandQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBrandQuery = { __typename?: 'Query', brand?: { __typename?: 'Brand', id: string, name: string, description?: string | null, logoUrl: string, deleted: boolean } | null };

export type CreateBrandMutationVariables = Exact<{
  input: BrandInput;
}>;


export type CreateBrandMutation = { __typename?: 'Mutation', createBrand: { __typename?: 'Brand', id: string, name: string, description?: string | null, logoUrl: string, deleted: boolean } };

export type UpdateBrandMutationVariables = Exact<{
  input: BrandInput;
}>;


export type UpdateBrandMutation = { __typename?: 'Mutation', updateBrand: { __typename?: 'Brand', id: string, name: string, description?: string | null, logoUrl: string, deleted: boolean } };

export type DeleteBrandMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteBrandMutation = { __typename?: 'Mutation', deleteBrand: boolean };

export const BrandFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BrandFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Brand"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]} as unknown as DocumentNode<BrandFragmentFragment, unknown>;
export const GetAllBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllBrands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BrandFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]} as unknown as DocumentNode<GetAllBrandsQuery, GetAllBrandsQueryVariables>;
export const GetBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]} as unknown as DocumentNode<GetBrandQuery, GetBrandQueryVariables>;
export const CreateBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]} as unknown as DocumentNode<CreateBrandMutation, CreateBrandMutationVariables>;
export const UpdateBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BrandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}}]}}]}}]} as unknown as DocumentNode<UpdateBrandMutation, UpdateBrandMutationVariables>;
export const DeleteBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteBrandMutation, DeleteBrandMutationVariables>;