// Package silica implements the Azure ARM Silica service API version 1.
//
// Master API Teplate with cross cutting concerns baked into the template.
package silica

// Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

import (
    "github.com/Azure/go-autorest/autorest"
    "github.com/Azure/go-autorest/autorest/azure"
    "github.com/Azure/go-autorest/autorest/validation"
    "net/http"
)

const (
        // DefaultBaseURI is the default URI used for the service Silica
        DefaultBaseURI = "http://localhost:8082/"
)

// ManagementClient is the base client for Silica.
type ManagementClient struct {
    autorest.Client
        BaseURI string
    }

// New creates an instance of the ManagementClient client.
func New()ManagementClient {
        return NewWithBaseURI(DefaultBaseURI, )
}

    // NewWithBaseURI creates an instance of the ManagementClient client.
    func NewWithBaseURI(baseURI string, ) ManagementClient {
        return ManagementClient{
            Client: autorest.NewClientWithUserAgent(UserAgent()),
            BaseURI: baseURI,
        }
    }

    // PostUserRefreshtokenforuseraccount step 3. Create a new bearer token
    // associated with the user account.
    //
    func (client ManagementClient) PostUserRefreshtokenforuseraccount(body *Model1) (result autorest.Response, err error) {
        if err := validation.Validate([]validation.Validation{
        { TargetValue: body,
         Constraints: []validation.Constraint{	{Target: "body", Name: validation.Null, Rule: false ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.MaxLength, Rule: 50, Chain: nil },
        }},
        	{Target: "body.Password", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Password", Name: validation.MaxLength, Rule: 200, Chain: nil },
        }},
        }}}}}); err != nil {
        return result, validation.NewErrorWithValidationError(err, "silica.ManagementClient","PostUserRefreshtokenforuseraccount")
    }

        req, err := client.PostUserRefreshtokenforuseraccountPreparer(body)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRefreshtokenforuseraccount", nil , "Failure preparing request")
            return
        }

        resp, err := client.PostUserRefreshtokenforuseraccountSender(req)
        if err != nil {
            result.Response = resp
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRefreshtokenforuseraccount", resp, "Failure sending request")
            return
        }

        result, err = client.PostUserRefreshtokenforuseraccountResponder(resp)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRefreshtokenforuseraccount", resp, "Failure responding to request")
        }

        return
    }

    // PostUserRefreshtokenforuseraccountPreparer prepares the PostUserRefreshtokenforuseraccount request.
    func (client ManagementClient) PostUserRefreshtokenforuseraccountPreparer(body *Model1) (*http.Request, error) {
        preparer := autorest.CreatePreparer(
                            autorest.AsJSON(),
                            autorest.AsPost(),
                            autorest.WithBaseURL(client.BaseURI),
                            autorest.WithPath("/User/RefreshTokenForUserAccount/"))
        if body != nil {
            preparer = autorest.DecoratePreparer(preparer,
                                autorest.WithJSON(body))
        }
        return preparer.Prepare(&http.Request{})
    }

    // PostUserRefreshtokenforuseraccountSender sends the PostUserRefreshtokenforuseraccount request. The method will close the
    // http.Response Body if it receives an error.
    func (client ManagementClient) PostUserRefreshtokenforuseraccountSender(req *http.Request) (*http.Response, error) {
        return autorest.SendWithSender(client, req)
    }

    // PostUserRefreshtokenforuseraccountResponder handles the response to the PostUserRefreshtokenforuseraccount request. The method always
    // closes the http.Response Body.
    func (client ManagementClient) PostUserRefreshtokenforuseraccountResponder(resp *http.Response) (result autorest.Response, err error) {
        err = autorest.Respond(
                resp,
                client.ByInspecting(),
                azure.WithErrorUnlessStatusCode(http.StatusOK),
                autorest.ByClosing())
        result.Response = resp
        return
    }

    // PostUserRegisteraccounttoreceivetoken step 1. Create a new user account to
    // allow API interaction.
    //
    func (client ManagementClient) PostUserRegisteraccounttoreceivetoken(body *Model1) (result autorest.Response, err error) {
        if err := validation.Validate([]validation.Validation{
        { TargetValue: body,
         Constraints: []validation.Constraint{	{Target: "body", Name: validation.Null, Rule: false ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.MaxLength, Rule: 50, Chain: nil },
        }},
        	{Target: "body.Password", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Password", Name: validation.MaxLength, Rule: 200, Chain: nil },
        }},
        }}}}}); err != nil {
        return result, validation.NewErrorWithValidationError(err, "silica.ManagementClient","PostUserRegisteraccounttoreceivetoken")
    }

        req, err := client.PostUserRegisteraccounttoreceivetokenPreparer(body)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRegisteraccounttoreceivetoken", nil , "Failure preparing request")
            return
        }

        resp, err := client.PostUserRegisteraccounttoreceivetokenSender(req)
        if err != nil {
            result.Response = resp
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRegisteraccounttoreceivetoken", resp, "Failure sending request")
            return
        }

        result, err = client.PostUserRegisteraccounttoreceivetokenResponder(resp)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRegisteraccounttoreceivetoken", resp, "Failure responding to request")
        }

        return
    }

    // PostUserRegisteraccounttoreceivetokenPreparer prepares the PostUserRegisteraccounttoreceivetoken request.
    func (client ManagementClient) PostUserRegisteraccounttoreceivetokenPreparer(body *Model1) (*http.Request, error) {
        preparer := autorest.CreatePreparer(
                            autorest.AsJSON(),
                            autorest.AsPost(),
                            autorest.WithBaseURL(client.BaseURI),
                            autorest.WithPath("/User/RegisterAccountToReceiveToken/"))
        if body != nil {
            preparer = autorest.DecoratePreparer(preparer,
                                autorest.WithJSON(body))
        }
        return preparer.Prepare(&http.Request{})
    }

    // PostUserRegisteraccounttoreceivetokenSender sends the PostUserRegisteraccounttoreceivetoken request. The method will close the
    // http.Response Body if it receives an error.
    func (client ManagementClient) PostUserRegisteraccounttoreceivetokenSender(req *http.Request) (*http.Response, error) {
        return autorest.SendWithSender(client, req)
    }

    // PostUserRegisteraccounttoreceivetokenResponder handles the response to the PostUserRegisteraccounttoreceivetoken request. The method always
    // closes the http.Response Body.
    func (client ManagementClient) PostUserRegisteraccounttoreceivetokenResponder(resp *http.Response) (result autorest.Response, err error) {
        err = autorest.Respond(
                resp,
                client.ByInspecting(),
                azure.WithErrorUnlessStatusCode(http.StatusOK),
                autorest.ByClosing())
        result.Response = resp
        return
    }

    // PostUserRequestaudittrail step 3. Create a new bearer token associated with
    // the user account.
    //
    func (client ManagementClient) PostUserRequestaudittrail(body *Model1) (result autorest.Response, err error) {
        if err := validation.Validate([]validation.Validation{
        { TargetValue: body,
         Constraints: []validation.Constraint{	{Target: "body", Name: validation.Null, Rule: false ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.MaxLength, Rule: 50, Chain: nil },
        }},
        	{Target: "body.Password", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Password", Name: validation.MaxLength, Rule: 200, Chain: nil },
        }},
        }}}}}); err != nil {
        return result, validation.NewErrorWithValidationError(err, "silica.ManagementClient","PostUserRequestaudittrail")
    }

        req, err := client.PostUserRequestaudittrailPreparer(body)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRequestaudittrail", nil , "Failure preparing request")
            return
        }

        resp, err := client.PostUserRequestaudittrailSender(req)
        if err != nil {
            result.Response = resp
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRequestaudittrail", resp, "Failure sending request")
            return
        }

        result, err = client.PostUserRequestaudittrailResponder(resp)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRequestaudittrail", resp, "Failure responding to request")
        }

        return
    }

    // PostUserRequestaudittrailPreparer prepares the PostUserRequestaudittrail request.
    func (client ManagementClient) PostUserRequestaudittrailPreparer(body *Model1) (*http.Request, error) {
        preparer := autorest.CreatePreparer(
                            autorest.AsJSON(),
                            autorest.AsPost(),
                            autorest.WithBaseURL(client.BaseURI),
                            autorest.WithPath("/User/RequestAuditTrail/"))
        if body != nil {
            preparer = autorest.DecoratePreparer(preparer,
                                autorest.WithJSON(body))
        }
        return preparer.Prepare(&http.Request{})
    }

    // PostUserRequestaudittrailSender sends the PostUserRequestaudittrail request. The method will close the
    // http.Response Body if it receives an error.
    func (client ManagementClient) PostUserRequestaudittrailSender(req *http.Request) (*http.Response, error) {
        return autorest.SendWithSender(client, req)
    }

    // PostUserRequestaudittrailResponder handles the response to the PostUserRequestaudittrail request. The method always
    // closes the http.Response Body.
    func (client ManagementClient) PostUserRequestaudittrailResponder(resp *http.Response) (result autorest.Response, err error) {
        err = autorest.Respond(
                resp,
                client.ByInspecting(),
                azure.WithErrorUnlessStatusCode(http.StatusOK),
                autorest.ByClosing())
        result.Response = resp
        return
    }

    // PostUserRetrievetokenforuseraccount step 2. Return the bearer token
    // associated with the user account.
    //
    func (client ManagementClient) PostUserRetrievetokenforuseraccount(body *Model1) (result autorest.Response, err error) {
        if err := validation.Validate([]validation.Validation{
        { TargetValue: body,
         Constraints: []validation.Constraint{	{Target: "body", Name: validation.Null, Rule: false ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Email", Name: validation.MaxLength, Rule: 50, Chain: nil },
        }},
        	{Target: "body.Password", Name: validation.Null, Rule: true ,
        Chain: []validation.Constraint{	{Target: "body.Password", Name: validation.MaxLength, Rule: 200, Chain: nil },
        }},
        }}}}}); err != nil {
        return result, validation.NewErrorWithValidationError(err, "silica.ManagementClient","PostUserRetrievetokenforuseraccount")
    }

        req, err := client.PostUserRetrievetokenforuseraccountPreparer(body)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRetrievetokenforuseraccount", nil , "Failure preparing request")
            return
        }

        resp, err := client.PostUserRetrievetokenforuseraccountSender(req)
        if err != nil {
            result.Response = resp
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRetrievetokenforuseraccount", resp, "Failure sending request")
            return
        }

        result, err = client.PostUserRetrievetokenforuseraccountResponder(resp)
        if err != nil {
            err = autorest.NewErrorWithError(err, "silica.ManagementClient", "PostUserRetrievetokenforuseraccount", resp, "Failure responding to request")
        }

        return
    }

    // PostUserRetrievetokenforuseraccountPreparer prepares the PostUserRetrievetokenforuseraccount request.
    func (client ManagementClient) PostUserRetrievetokenforuseraccountPreparer(body *Model1) (*http.Request, error) {
        preparer := autorest.CreatePreparer(
                            autorest.AsJSON(),
                            autorest.AsPost(),
                            autorest.WithBaseURL(client.BaseURI),
                            autorest.WithPath("/User/RetrieveTokenForUserAccount/"))
        if body != nil {
            preparer = autorest.DecoratePreparer(preparer,
                                autorest.WithJSON(body))
        }
        return preparer.Prepare(&http.Request{})
    }

    // PostUserRetrievetokenforuseraccountSender sends the PostUserRetrievetokenforuseraccount request. The method will close the
    // http.Response Body if it receives an error.
    func (client ManagementClient) PostUserRetrievetokenforuseraccountSender(req *http.Request) (*http.Response, error) {
        return autorest.SendWithSender(client, req)
    }

    // PostUserRetrievetokenforuseraccountResponder handles the response to the PostUserRetrievetokenforuseraccount request. The method always
    // closes the http.Response Body.
    func (client ManagementClient) PostUserRetrievetokenforuseraccountResponder(resp *http.Response) (result autorest.Response, err error) {
        err = autorest.Respond(
                resp,
                client.ByInspecting(),
                azure.WithErrorUnlessStatusCode(http.StatusOK),
                autorest.ByClosing())
        result.Response = resp
        return
    }
