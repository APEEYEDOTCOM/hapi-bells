// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace silica
{
    using Microsoft.Rest;
    using Models;
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// Master API Teplate with cross cutting concerns baked into the template.
    /// </summary>
    public partial interface IMASTERTEMPLATE : System.IDisposable
    {
        /// <summary>
        /// The base URI of the service.
        /// </summary>
        System.Uri BaseUri { get; set; }

        /// <summary>
        /// Gets or sets json serialization settings.
        /// </summary>
        JsonSerializerSettings SerializationSettings { get; }

        /// <summary>
        /// Gets or sets json deserialization settings.
        /// </summary>
        JsonSerializerSettings DeserializationSettings { get; }


        /// <summary>
        /// Gets the IGetSystemApi.
        /// </summary>
        IGetSystemApi GetSystemApi { get; }

        /// <summary>
        /// Gets the IGetSystemSessionApi.
        /// </summary>
        IGetSystemSessionApi GetSystemSessionApi { get; }

        /// <summary>
        /// Gets the IGetSystemUseragentApi.
        /// </summary>
        IGetSystemUseragentApi GetSystemUseragentApi { get; }

        /// <summary>
        /// Gets the IGetSystemGeneratesdkApi.
        /// </summary>
        IGetSystemGeneratesdkApi GetSystemGeneratesdkApi { get; }

        /// <summary>
        /// Step 3. Create new user account bearer token.
        /// </summary>
        /// <remarks>
        /// Step 3. Create a new bearer token associated with the user account.
        /// </remarks>
        /// <param name='body'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> PostUserRefreshtokenforuseraccountWithHttpMessagesAsync(Model1 body = default(Model1), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Step 1. Create a user account.
        /// </summary>
        /// <remarks>
        /// Step 1. Create a new user account to allow API interaction.
        /// </remarks>
        /// <param name='body'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> PostUserRegisteraccounttoreceivetokenWithHttpMessagesAsync(Model1 body = default(Model1), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Step 3. Create new user account bearer token.
        /// </summary>
        /// <remarks>
        /// Step 3. Create a new bearer token associated with the user account.
        /// </remarks>
        /// <param name='body'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> PostUserRequestaudittrailWithHttpMessagesAsync(Model1 body = default(Model1), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Step 2. Retrieve user account bearer token.
        /// </summary>
        /// <remarks>
        /// Step 2. Return the bearer token associated with the user account.
        /// </remarks>
        /// <param name='body'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> PostUserRetrievetokenforuseraccountWithHttpMessagesAsync(Model1 body = default(Model1), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

    }
}
