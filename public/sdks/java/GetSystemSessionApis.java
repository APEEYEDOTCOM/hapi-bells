/**
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package silica;

import com.microsoft.rest.RestException;
import com.microsoft.rest.ServiceCallback;
import com.microsoft.rest.ServiceFuture;
import com.microsoft.rest.ServiceResponse;
import java.io.IOException;
import rx.Observable;

/**
 * An instance of this class provides access to all the operations defined
 * in GetSystemSessionApis.
 */
public interface GetSystemSessionApis {
    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @throws RestException thrown if the request is rejected by server
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent
     */
    void key(String aPIKey);

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @param serviceCallback the async ServiceCallback to handle successful and failed responses.
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceFuture} object
     */
    ServiceFuture<Void> keyAsync(String aPIKey, final ServiceCallback<Void> serviceCallback);

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    Observable<Void> keyAsync(String aPIKey);

    /**
     * API Heartbeat Monitoring.
     * Endpoint used for Heartbeat Monitoring. Monitoring will use this endpoint to check if the API is up and available.
     *
     * @param aPIKey Client API Key
     * @throws IllegalArgumentException thrown if parameters fail the validation
     * @return the {@link ServiceResponse} object if successful.
     */
    Observable<ServiceResponse<Void>> keyWithServiceResponseAsync(String aPIKey);

}
