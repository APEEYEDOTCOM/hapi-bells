/**
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package silica.implementation;

import retrofit2.Retrofit;
import silica.GetSystemGeneratesdkApis;
import com.microsoft.rest.RestException;
import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceFuture;
import com.microsoft.rest.ServiceResponse;
import java.io.IOException;
import okhttp3.ResponseBody;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.Path;
import retrofit2.Response;
import rx.functions.Func1;
import rx.Observable;

/**
 * An instance of this class provides access to all the operations defined
 * in GetSystemGeneratesdkApis.
 */
public class GetSystemGeneratesdkApisImpl implements GetSystemGeneratesdkApis {
    /** The Retrofit service to perform REST calls. */
    private GetSystemGeneratesdkApisService service;
    /** The service client containing this operation class. */
    private MASTERTEMPLATEImpl client;

    /**
     * Initializes an instance of GetSystemGeneratesdkApis.
     *
     * @param retrofit the Retrofit instance built from a Retrofit Builder.
     * @param client the instance of the service client containing this operation class.
     */
    public GetSystemGeneratesdkApisImpl(Retrofit retrofit, MASTERTEMPLATEImpl client) {
        this.service = retrofit.create(GetSystemGeneratesdkApisService.class);
        this.client = client;
    }

    /**
     * The interface defining all the services for GetSystemGeneratesdkApis to be
     * used by Retrofit to perform actually REST calls.
     */
    interface GetSystemGeneratesdkApisService {
        @Headers({ "Content-Type: application/json; charset=utf-8", "x-ms-logging-context: silica.GetSystemGeneratesdkApis keySwaggerjsonurlLanguageNamespace" })
        @GET("System/GenerateSDK/{API_Key}/{swaggerJSONurl}/{language}/{namespace}")
        Observable<Response<ResponseBody>> keySwaggerjsonurlLanguageNamespace(@Path("API_Key") String aPIKey, @Path("swaggerJSONurl") String swaggerJSONurl, @Path("language") String language, @Path("namespace") String namespace);

    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param swaggerJSONurl Url path to swagger.json file
     * @param language Development language to generate SDK for. Possible values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     * @param namespace User selected namespace
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @throws RestException thrown if the request is rejected by server
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent
     */
    public void keySwaggerjsonurlLanguageNamespace(String aPIKey, String swaggerJSONurl, String language, String namespace) {
        keySwaggerjsonurlLanguageNamespaceWithServiceResponseAsync(aPIKey, swaggerJSONurl, language, namespace).toBlocking().single().body();
    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param swaggerJSONurl Url path to swagger.json file
     * @param language Development language to generate SDK for. Possible values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     * @param namespace User selected namespace
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceFuture} object
     */
    public ServiceFuture<Void> keySwaggerjsonurlLanguageNamespaceAsync(String aPIKey, String swaggerJSONurl, String language, String namespace, final ServiceCallback<Void> serviceCallback) {
        return ServiceFuture.fromResponse(keySwaggerjsonurlLanguageNamespaceWithServiceResponseAsync(aPIKey, swaggerJSONurl, language, namespace), serviceCallback);
    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param swaggerJSONurl Url path to swagger.json file
     * @param language Development language to generate SDK for. Possible values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     * @param namespace User selected namespace
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    public Observable<Void> keySwaggerjsonurlLanguageNamespaceAsync(String aPIKey, String swaggerJSONurl, String language, String namespace) {
        return keySwaggerjsonurlLanguageNamespaceWithServiceResponseAsync(aPIKey, swaggerJSONurl, language, namespace).map(new Func1<ServiceResponse<Void>, Void>() {
            @Override
            public Void call(ServiceResponse<Void> response) {
                return response.body();
            }
        });
    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param swaggerJSONurl Url path to swagger.json file
     * @param language Development language to generate SDK for. Possible values include: 'csharp', 'go', 'java', 'nodejs', 'python', 'ruby'
     * @param namespace User selected namespace
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    public Observable<ServiceResponse<Void>> keySwaggerjsonurlLanguageNamespaceWithServiceResponseAsync(String aPIKey, String swaggerJSONurl, String language, String namespace) {
        if (aPIKey == null) {
            throw new IllegalArgumentException("Parameter aPIKey is required and cannot be null.");
        }
        if (swaggerJSONurl == null) {
            throw new IllegalArgumentException("Parameter swaggerJSONurl is required and cannot be null.");
        }
        if (language == null) {
            throw new IllegalArgumentException("Parameter language is required and cannot be null.");
        }
        if (namespace == null) {
            throw new IllegalArgumentException("Parameter namespace is required and cannot be null.");
        }
        return service.keySwaggerjsonurlLanguageNamespace(aPIKey, swaggerJSONurl, language, namespace)
            .flatMap(new Func1<Response<ResponseBody>, Observable<ServiceResponse<Void>>>() {
                @Override
                public Observable<ServiceResponse<Void>> call(Response<ResponseBody> response) {
                    try {
                        ServiceResponse<Void> clientResponse = keySwaggerjsonurlLanguageNamespaceDelegate(response);
                        return Observable.just(clientResponse);
                    } catch (Throwable t) {
                        return Observable.error(t);
                    }
                }
            });
    }

    private ServiceResponse<Void> keySwaggerjsonurlLanguageNamespaceDelegate(Response<ResponseBody> response) throws RestException, IOException, IllegalArgumentException {
        return this.client.restClient().responseBuilderFactory().<Void, RestException>newInstance(this.client.serializerAdapter())
                .build(response);
    }

}
