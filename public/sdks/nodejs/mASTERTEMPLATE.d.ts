/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

declare class MASTERTEMPLATE {
  /**
   * @class
   * Initializes a new instance of the MASTERTEMPLATE class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: ServiceClientOptions);

  // Operation groups
  getSystemApi: operations.GetSystemApi;
  getSystemSessionApi: operations.GetSystemSessionApi;
  getSystemUseragentApi: operations.GetSystemUseragentApi;
  getSystemGeneratesdkApi: operations.GetSystemGeneratesdkApi;


  /**
   * @summary Step 3. Create new user account bearer token.
   *
   * Step 3. Create a new bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  postUserRefreshtokenforuseraccountWithHttpOperationResponse(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * @summary Step 3. Create new user account bearer token.
   *
   * Step 3. Create a new bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  postUserRefreshtokenforuseraccount(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  postUserRefreshtokenforuseraccount(callback: ServiceCallback<void>): void;
  postUserRefreshtokenforuseraccount(options: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * @summary Step 1. Create a user account.
   *
   * Step 1. Create a new user account to allow API interaction.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  postUserRegisteraccounttoreceivetokenWithHttpOperationResponse(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * @summary Step 1. Create a user account.
   *
   * Step 1. Create a new user account to allow API interaction.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  postUserRegisteraccounttoreceivetoken(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  postUserRegisteraccounttoreceivetoken(callback: ServiceCallback<void>): void;
  postUserRegisteraccounttoreceivetoken(options: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * @summary Step 3. Create new user account bearer token.
   *
   * Step 3. Create a new bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  postUserRequestaudittrailWithHttpOperationResponse(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * @summary Step 3. Create new user account bearer token.
   *
   * Step 3. Create a new bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  postUserRequestaudittrail(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  postUserRequestaudittrail(callback: ServiceCallback<void>): void;
  postUserRequestaudittrail(options: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


  /**
   * @summary Step 2. Retrieve user account bearer token.
   *
   * Step 2. Return the bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  postUserRetrievetokenforuseraccountWithHttpOperationResponse(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

  /**
   * @summary Step 2. Retrieve user account bearer token.
   *
   * Step 2. Return the bearer token associated with the user account.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} options.body.email User email account.
   *
   * @param {string} options.body.password User password
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  postUserRetrievetokenforuseraccount(options?: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }): Promise<void>;
  postUserRetrievetokenforuseraccount(callback: ServiceCallback<void>): void;
  postUserRetrievetokenforuseraccount(options: { body? : models.Model1, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}

export = MASTERTEMPLATE;
