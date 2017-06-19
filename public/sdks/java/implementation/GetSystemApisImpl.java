/**
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package silica.implementation;

import retrofit2.Retrofit;
import silica.GetSystemApis;
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
 * in GetSystemApis.
 */
public class GetSystemApisImpl implements GetSystemApis {
    /** The Retrofit service to perform REST calls. */
    private GetSystemApisService service;
    /** The service client containing this operation class. */
    private MASTERTEMPLATEImpl client;

    /**
     * Initializes an instance of GetSystemApis.
     *
     * @param retrofit the Retrofit instance built from a Retrofit Builder.
     * @param client the instance of the service client containing this operation class.
     */
    public GetSystemApisImpl(Retrofit retrofit, MASTERTEMPLATEImpl client) {
        this.service = retrofit.create(GetSystemApisService.class);
        this.client = client;
    }

    /**
     * The interface defining all the services for GetSystemApis to be
     * used by Retrofit to perform actually REST calls.
     */
    interface GetSystemApisService {
        @Headers({ "Content-Type: application/json; charset=utf-8", "x-ms-logging-context: silica.GetSystemApis pingApi" })
        @GET("System/API_Ping/{API_Key}/")
        Observable<Response<ResponseBody>> pingApi(@Path("API_Key") String aPIKey);

    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @throws RestException thrown if the request is rejected by server
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent
     */
    public void pingApi(String aPIKey) {
        pingApiWithServiceResponseAsync(aPIKey).toBlocking().single().body();
    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceFuture} object
     */
    public ServiceFuture<Void> pingApiAsync(String aPIKey, final ServiceCallback<Void> serviceCallback) {
        return ServiceFuture.fromResponse(pingApiWithServiceResponseAsync(aPIKey), serviceCallback);
    }

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    public Observable<Void> pingApiAsync(String aPIKey) {
        return pingApiWithServiceResponseAsync(aPIKey).map(new Func1<ServiceResponse<Void>, Void>() {
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
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    public Observable<ServiceResponse<Void>> pingApiWithServiceResponseAsync(String aPIKey) {
        if (aPIKey == null) {
            throw new IllegalArgumentException("Parameter aPIKey is required and cannot be null.");
        }
        return service.pingApi(aPIKey)
            .flatMap(new Func1<Response<ResponseBody>, Observable<ServiceResponse<Void>>>() {
                @Override
                public Observable<ServiceResponse<Void>> call(Response<ResponseBody> response) {
                    try {
                        ServiceResponse<Void> clientResponse = pingApiDelegate(response);
                        return Observable.just(clientResponse);
                    } catch (Throwable t) {
                        return Observable.error(t);
                    }
                }
            });
    }

    private ServiceResponse<Void> pingApiDelegate(Response<ResponseBody> response) throws RestException, IOException, IllegalArgumentException {
        return this.client.restClient().responseBuilderFactory().<Void, RestException>newInstance(this.client.serializerAdapter())
                .build(response);
    }

}
