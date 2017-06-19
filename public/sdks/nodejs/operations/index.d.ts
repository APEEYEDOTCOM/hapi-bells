/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * GetSystemApi
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MASTERTEMPLATE.
 */
export interface GetSystemApi {


    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    pingApiWithHttpOperationResponse(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    pingApi(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    pingApi(aPIKey: string, callback: ServiceCallback<void>): void;
    pingApi(aPIKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}

/**
 * @class
 * GetSystemSessionApi
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MASTERTEMPLATE.
 */
export interface GetSystemSessionApi {


    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    keyWithHttpOperationResponse(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    key(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    key(aPIKey: string, callback: ServiceCallback<void>): void;
    key(aPIKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}

/**
 * @class
 * GetSystemUseragentApi
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MASTERTEMPLATE.
 */
export interface GetSystemUseragentApi {


    /**
     * @summary Consumer User Agent Information
     *
     * Endpoint used to return the Consumer User Agent Information.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    keyWithHttpOperationResponse(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Consumer User Agent Information
     *
     * Endpoint used to return the Consumer User Agent Information.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {object} [options] Optional Parameters.
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
    key(aPIKey: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    key(aPIKey: string, callback: ServiceCallback<void>): void;
    key(aPIKey: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}

/**
 * @class
 * GetSystemGeneratesdkApi
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MASTERTEMPLATE.
 */
export interface GetSystemGeneratesdkApi {


    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {string} swaggerJSONurl Url path to swagger.json file
     *
     * @param {string} language Development language to generate SDK for. Possible
     * values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     *
     * @param {string} namespace User selected namespace
     *
     * @param {object} [options] Optional Parameters.
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
    keySwaggerjsonurlLanguageNamespaceWithHttpOperationResponse(aPIKey: string, swaggerJSONurl: string, language: string, namespace: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary API Heartbeat Monitoring
     *
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to
     * check if the API is up and available.
     *
     * @param {string} aPIKey Client API Key
     *
     * @param {string} swaggerJSONurl Url path to swagger.json file
     *
     * @param {string} language Development language to generate SDK for. Possible
     * values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     *
     * @param {string} namespace User selected namespace
     *
     * @param {object} [options] Optional Parameters.
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
    keySwaggerjsonurlLanguageNamespace(aPIKey: string, swaggerJSONurl: string, language: string, namespace: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    keySwaggerjsonurlLanguageNamespace(aPIKey: string, swaggerJSONurl: string, language: string, namespace: string, callback: ServiceCallback<void>): void;
    keySwaggerjsonurlLanguageNamespace(aPIKey: string, swaggerJSONurl: string, language: string, namespace: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}