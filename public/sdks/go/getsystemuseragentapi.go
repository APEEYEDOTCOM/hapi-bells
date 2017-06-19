package silica

// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

import (
    "github.com/Azure/go-autorest/autorest"
    "github.com/Azure/go-autorest/autorest/azure"
    "net/http"
)

// GetSystemUseragentAPIClient is the master API Teplate with cross cutting
// concerns baked into the template.
type GetSystemUseragentAPIClient struct {
    ManagementClient
}
// NewGetSystemUseragentAPIClient creates an instance of the
// GetSystemUseragentAPIClient client.
func NewGetSystemUseragentAPIClient() GetSystemUseragentAPIClient {
        return NewGetSystemUseragentAPIClientWithBaseURI(DefaultBaseURI, )
        }

// NewGetSystemUseragentAPIClientWithBaseURI creates an instance of the
// GetSystemUseragentAPIClient client.
    func NewGetSystemUseragentAPIClientWithBaseURI(baseURI string, ) GetSystemUseragentAPIClient {
        return GetSystemUseragentAPIClient{ NewWithBaseURI(baseURI, )}
    }

// Key endpoint used to return the Consumer User Agent Information.
//
// APIKey is client API Key
func (client GetSystemUseragentAPIClient) Key(APIKey string) (result autorest.Response, err error) {
    req, err := client.KeyPreparer(APIKey)
    if err != nil {
        err = autorest.NewErrorWithError(err, "silica.GetSystemUseragentAPIClient", "Key", nil , "Failure preparing request")
        return
    }

    resp, err := client.KeySender(req)
    if err != nil {
        result.Response = resp
        err = autorest.NewErrorWithError(err, "silica.GetSystemUseragentAPIClient", "Key", resp, "Failure sending request")
        return
    }

    result, err = client.KeyResponder(resp)
    if err != nil {
        err = autorest.NewErrorWithError(err, "silica.GetSystemUseragentAPIClient", "Key", resp, "Failure responding to request")
    }

    return
}

// KeyPreparer prepares the Key request.
func (client GetSystemUseragentAPIClient) KeyPreparer(APIKey string) (*http.Request, error) {
    pathParameters := map[string]interface{} {
    "API_Key": autorest.Encode("path",APIKey),
    }

    preparer := autorest.CreatePreparer(
                        autorest.AsGet(),
                        autorest.WithBaseURL(client.BaseURI),
                        autorest.WithPathParameters("/System/UserAgent/{API_Key}/",pathParameters))
    return preparer.Prepare(&http.Request{})
}

// KeySender sends the Key request. The method will close the
// http.Response Body if it receives an error.
func (client GetSystemUseragentAPIClient) KeySender(req *http.Request) (*http.Response, error) {
    return autorest.SendWithSender(client, req)
}

// KeyResponder handles the response to the Key request. The method always
// closes the http.Response Body.
func (client GetSystemUseragentAPIClient) KeyResponder(resp *http.Response) (result autorest.Response, err error) {
    err = autorest.Respond(
            resp,
            client.ByInspecting(),
            azure.WithErrorUnlessStatusCode(http.StatusOK),
            autorest.ByClosing())
    result.Response = resp
    return
}
