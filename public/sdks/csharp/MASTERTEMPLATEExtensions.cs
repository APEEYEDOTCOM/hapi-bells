// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

namespace silica
{
    using Models;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// Extension methods for MASTERTEMPLATE.
    /// </summary>
    public static partial class MASTERTEMPLATEExtensions
    {
            /// <summary>
            /// Step 3. Create new user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 3. Create a new bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            public static void PostUserRefreshtokenforuseraccount(this IMASTERTEMPLATE operations, Model1 body = default(Model1))
            {
                operations.PostUserRefreshtokenforuseraccountAsync(body).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Step 3. Create new user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 3. Create a new bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PostUserRefreshtokenforuseraccountAsync(this IMASTERTEMPLATE operations, Model1 body = default(Model1), CancellationToken cancellationToken = default(CancellationToken))
            {
                (await operations.PostUserRefreshtokenforuseraccountWithHttpMessagesAsync(body, null, cancellationToken).ConfigureAwait(false)).Dispose();
            }

            /// <summary>
            /// Step 1. Create a user account.
            /// </summary>
            /// <remarks>
            /// Step 1. Create a new user account to allow API interaction.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            public static void PostUserRegisteraccounttoreceivetoken(this IMASTERTEMPLATE operations, Model1 body = default(Model1))
            {
                operations.PostUserRegisteraccounttoreceivetokenAsync(body).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Step 1. Create a user account.
            /// </summary>
            /// <remarks>
            /// Step 1. Create a new user account to allow API interaction.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PostUserRegisteraccounttoreceivetokenAsync(this IMASTERTEMPLATE operations, Model1 body = default(Model1), CancellationToken cancellationToken = default(CancellationToken))
            {
                (await operations.PostUserRegisteraccounttoreceivetokenWithHttpMessagesAsync(body, null, cancellationToken).ConfigureAwait(false)).Dispose();
            }

            /// <summary>
            /// Step 3. Create new user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 3. Create a new bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            public static void PostUserRequestaudittrail(this IMASTERTEMPLATE operations, Model1 body = default(Model1))
            {
                operations.PostUserRequestaudittrailAsync(body).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Step 3. Create new user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 3. Create a new bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PostUserRequestaudittrailAsync(this IMASTERTEMPLATE operations, Model1 body = default(Model1), CancellationToken cancellationToken = default(CancellationToken))
            {
                (await operations.PostUserRequestaudittrailWithHttpMessagesAsync(body, null, cancellationToken).ConfigureAwait(false)).Dispose();
            }

            /// <summary>
            /// Step 2. Retrieve user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 2. Return the bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            public static void PostUserRetrievetokenforuseraccount(this IMASTERTEMPLATE operations, Model1 body = default(Model1))
            {
                operations.PostUserRetrievetokenforuseraccountAsync(body).GetAwaiter().GetResult();
            }

            /// <summary>
            /// Step 2. Retrieve user account bearer token.
            /// </summary>
            /// <remarks>
            /// Step 2. Return the bearer token associated with the user account.
            /// </remarks>
            /// <param name='operations'>
            /// The operations group for this extension method.
            /// </param>
            /// <param name='body'>
            /// </param>
            /// <param name='cancellationToken'>
            /// The cancellation token.
            /// </param>
            public static async Task PostUserRetrievetokenforuseraccountAsync(this IMASTERTEMPLATE operations, Model1 body = default(Model1), CancellationToken cancellationToken = default(CancellationToken))
            {
                (await operations.PostUserRetrievetokenforuseraccountWithHttpMessagesAsync(body, null, cancellationToken).ConfigureAwait(false)).Dispose();
            }

    }
}
