"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    /**
     * The request succeeded
     */
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    /**
     * The request succeeded, and a new resource was created
     */
    StatusCode[StatusCode["Created"] = 201] = "Created";
    /**
     * The request has been received but not yet acted upon
     */
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    /**
     * intended for cases where another process or server handles the request
     */
    StatusCode[StatusCode["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
    /**
     * There is no content to send for this request
     */
    StatusCode[StatusCode["NoContent"] = 204] = "NoContent";
    /**
     * The request has more than one possible response. The user agent or user should choose one of them
     */
    StatusCode[StatusCode["MultipleChoice"] = 300] = "MultipleChoice";
    /**
     * The URL of the requested resource has been changed permanently. The new URL is given in the response.
     */
    StatusCode[StatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    /**
     * This response code means that the URI of requested resource has been changed temporarily.
     */
    StatusCode[StatusCode["Found"] = 302] = "Found";
    /**
     * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
     */
    StatusCode[StatusCode["SeeOther"] = 303] = "SeeOther";
    /**
     * This is used for caching purposes. It tells the client that the response has not been modified
     */
    StatusCode[StatusCode["NotModified"] = 304] = "NotModified";
    /**
     * The server could not understand the request due to invalid syntax.
     */
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
     */
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    /**
     * The client does not have access rights to the content (i.e. unauthorized)
     * Unlike 401 Unauthorized, the client's identity is known to the server.
     */
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    /**
     * The server can not find the requested resource
     */
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    /**
     * The request method is known by the server but is not supported by the target resource
     */
    StatusCode[StatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    /**
     * This response is sent when the requested content has been permanently deleted from server, with no forwarding address
     */
    StatusCode[StatusCode["Gone"] = 410] = "Gone";
    /**
     * The user has sent too many requests in a given amount of time
     */
    StatusCode[StatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    /**
     * The server has encountered a situation it does not know how to handle
     */
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    /**
     * The request method is not supported by the server and cannot be handled
     */
    StatusCode[StatusCode["NotImplemented"] = 501] = "NotImplemented";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
