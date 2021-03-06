# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.service_client import ServiceClient
from msrest import Configuration, Serializer, Deserializer
from .version import VERSION
from msrest.pipeline import ClientRawResponse
from msrest.exceptions import HttpOperationError
from .operations.get_system_api_operations import GetSystemApiOperations
from .operations.get_system_session_api_operations import GetSystemSessionApiOperations
from .operations.get_system_useragent_api_operations import GetSystemUseragentApiOperations
from .operations.get_system_generatesdk_api_operations import GetSystemGeneratesdkApiOperations
from . import models


class MASTERTEMPLATEConfiguration(Configuration):
    """Configuration for MASTERTEMPLATE
    Note that all parameters used to create this instance are saved as instance
    attributes.

    :param str base_url: Service URL
    """

    def __init__(
            self, base_url=None):

        if not base_url:
            base_url = 'http://localhost:8082/'

        super(MASTERTEMPLATEConfiguration, self).__init__(base_url)

        self.add_user_agent('mastertemplate/{}'.format(VERSION))


class MASTERTEMPLATE(object):
    """Master API Teplate with cross cutting concerns baked into the template.

    :ivar config: Configuration for client.
    :vartype config: MASTERTEMPLATEConfiguration

    :ivar get_system_api: GetSystemApi operations
    :vartype get_system_api: silica.operations.GetSystemApiOperations
    :ivar get_system_session_api: GetSystemSessionApi operations
    :vartype get_system_session_api: silica.operations.GetSystemSessionApiOperations
    :ivar get_system_useragent_api: GetSystemUseragentApi operations
    :vartype get_system_useragent_api: silica.operations.GetSystemUseragentApiOperations
    :ivar get_system_generatesdk_api: GetSystemGeneratesdkApi operations
    :vartype get_system_generatesdk_api: silica.operations.GetSystemGeneratesdkApiOperations

    :param str base_url: Service URL
    """

    def __init__(
            self, base_url=None):

        self.config = MASTERTEMPLATEConfiguration(base_url)
        self._client = ServiceClient(None, self.config)

        client_models = {k: v for k, v in models.__dict__.items() if isinstance(v, type)}
        self.api_version = '1'
        self._serialize = Serializer(client_models)
        self._deserialize = Deserializer(client_models)

        self.get_system_api = GetSystemApiOperations(
            self._client, self.config, self._serialize, self._deserialize)
        self.get_system_session_api = GetSystemSessionApiOperations(
            self._client, self.config, self._serialize, self._deserialize)
        self.get_system_useragent_api = GetSystemUseragentApiOperations(
            self._client, self.config, self._serialize, self._deserialize)
        self.get_system_generatesdk_api = GetSystemGeneratesdkApiOperations(
            self._client, self.config, self._serialize, self._deserialize)

    def post_user_refreshtokenforuseraccount(
            self, body=None, custom_headers=None, raw=False, **operation_config):
        """Step 3. Create new user account bearer token.

        Step 3. Create a new bearer token associated with the user account.

        :param body:
        :type body: :class:`Model1 <silica.models.Model1>`
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :rtype: None
        :rtype: :class:`ClientRawResponse<msrest.pipeline.ClientRawResponse>`
         if raw=true
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = '/User/RefreshTokenForUserAccount/'

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        if body is not None:
            body_content = self._serialize.body(body, 'Model1')
        else:
            body_content = None

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, **operation_config)

        if response.status_code < 200 or response.status_code >= 300:
            raise HttpOperationError(self._deserialize, response)

        if raw:
            client_raw_response = ClientRawResponse(None, response)
            return client_raw_response

    def post_user_registeraccounttoreceivetoken(
            self, body=None, custom_headers=None, raw=False, **operation_config):
        """Step 1. Create a user account.

        Step 1. Create a new user account to allow API interaction.

        :param body:
        :type body: :class:`Model1 <silica.models.Model1>`
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :rtype: None
        :rtype: :class:`ClientRawResponse<msrest.pipeline.ClientRawResponse>`
         if raw=true
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = '/User/RegisterAccountToReceiveToken/'

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        if body is not None:
            body_content = self._serialize.body(body, 'Model1')
        else:
            body_content = None

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, **operation_config)

        if response.status_code < 200 or response.status_code >= 300:
            raise HttpOperationError(self._deserialize, response)

        if raw:
            client_raw_response = ClientRawResponse(None, response)
            return client_raw_response

    def post_user_requestaudittrail(
            self, body=None, custom_headers=None, raw=False, **operation_config):
        """Step 3. Create new user account bearer token.

        Step 3. Create a new bearer token associated with the user account.

        :param body:
        :type body: :class:`Model1 <silica.models.Model1>`
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :rtype: None
        :rtype: :class:`ClientRawResponse<msrest.pipeline.ClientRawResponse>`
         if raw=true
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = '/User/RequestAuditTrail/'

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        if body is not None:
            body_content = self._serialize.body(body, 'Model1')
        else:
            body_content = None

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, **operation_config)

        if response.status_code < 200 or response.status_code >= 300:
            raise HttpOperationError(self._deserialize, response)

        if raw:
            client_raw_response = ClientRawResponse(None, response)
            return client_raw_response

    def post_user_retrievetokenforuseraccount(
            self, body=None, custom_headers=None, raw=False, **operation_config):
        """Step 2. Retrieve user account bearer token.

        Step 2. Return the bearer token associated with the user account.

        :param body:
        :type body: :class:`Model1 <silica.models.Model1>`
        :param dict custom_headers: headers that will be added to the request
        :param bool raw: returns the direct response alongside the
         deserialized response
        :param operation_config: :ref:`Operation configuration
         overrides<msrest:optionsforoperations>`.
        :rtype: None
        :rtype: :class:`ClientRawResponse<msrest.pipeline.ClientRawResponse>`
         if raw=true
        :raises:
         :class:`HttpOperationError<msrest.exceptions.HttpOperationError>`
        """
        # Construct URL
        url = '/User/RetrieveTokenForUserAccount/'

        # Construct parameters
        query_parameters = {}

        # Construct headers
        header_parameters = {}
        header_parameters['Content-Type'] = 'application/json; charset=utf-8'
        if custom_headers:
            header_parameters.update(custom_headers)

        # Construct body
        if body is not None:
            body_content = self._serialize.body(body, 'Model1')
        else:
            body_content = None

        # Construct and send request
        request = self._client.post(url, query_parameters)
        response = self._client.send(
            request, header_parameters, body_content, **operation_config)

        if response.status_code < 200 or response.status_code >= 300:
            raise HttpOperationError(self._deserialize, response)

        if raw:
            client_raw_response = ClientRawResponse(None, response)
            return client_raw_response
