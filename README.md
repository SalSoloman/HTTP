### HTTP

## Specifications

**General**

- [x] The artifact produced is a repo with at least two sub-folders: `postalicious/` and `sandbox-server/`.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in `package.json`.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Code uses a linter and there are no linting errors.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

**Sandbox Server**

_Note: to get a jump start on the sandbox server, you can use the provided [Scaffolded Sandbox Server](#scaffolded-sandbox-server) code. It doesen't solve for all of the specs below, but it will get a good amount of the way there._

- [x] Can run the command `npm run sandbox-server` (or `npm run sb`, if you want to save some typing) to start the sandbox web server at port 3000.
- [x] The sandbox server source code is written using the [Express][express] library.
- [x] Sending a `GET` request to the path `/` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `Welcome to Sandbox!`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/search?q=doodads` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `You searched for: "doodads"`
    - NOTE: (it doesn't need to actually do any searching, just return the plain text)
    - NOTE: "doodads" is a placeholder for whatever string is in the `q` query param
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/search` responds with...
  - [x] a 400 (Bad Request) status code
  - [x] a plain-text response body with the content `You didn't provide a search query term :(`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `POST` request to the path `/things` with a plain text body `flying car` responds with...
  - [x] a 201 (Created) status code
  - [x] a plain-text response body with the content `New thing created: "flying car"!` (it doesn't need to actually create anything, just return the plain text)
    - NOTE: "flying car" is just a placeholder for whatever string is sent in the POST body.
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/plain` responds with...
  - [x] a 200 (OK) status code
  - [x] a plain-text response body with the content `This is a plain text file`
  - [x] the `Content-Type` header set to `text/plain`
- [x] Sending a `GET` request to the path `/somefile` with an `Accept` header of `text/html` responds with...
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content `<!DOCTYPE html><html><body>This is an HTML file</body></html>`
  - [x] the `Content-Type` header set to `text/html`
- [x] Sending a `GET` request to the path `/myjsondata` with an `Accept` header of `application/json` responds with...
  - [x] a 200 (OK) status code
  - [x] an HTML response body with the content `{ "title": "some JSON data" }`
  - [x] the `Content-Type` header set to `application/json`
- [x] Sending a `GET` request to the path `/old-page` responds with...
  - [x] a 301 (Moved Permanently) status code
  - [x] the `Location` header set to `http://localhost:3000/newpage`
- [x] Sending a `POST` request to the path `/admin-only` responds with a 403 (Forbidden) status code
- [x] Sending a `GET` request to the path `/not-a-page` responds with a 404 (Not Found) status code
- [x] Sending a `GET` request to the path `/server-error` responds with a 500 (Internal Server Error) staus code

**Postalicious**

- [ ] Can run the command `npm run postalicious` (or `npm run pl`, if you want to save some typing) to start the Postalicious app at port 3001.
- [ ] Users can visit the main page of the Postalicious site at `http://localhost:3001`.
- [ ] Main page has three main sections:
  - [ ] Request builder HTML form
  - [ ] Raw HTTP request
  - [ ] Raw HTTP response
- [ ] When a user fills out the HTML form and clicks a "Send" button...
  - [ ] A raw HTTP request is generated and shown
  - [ ] An HTTP request is sent using the form data provided, and the raw response message is shown
- [ ] Users can fill out an HTML form to specify HTTP request details.
- [ ] Submitting the form will send the request according to the specified details.
- [ ] Requests are made from the server, not from the browser (this is to avoid [CORS issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)).
- [ ] Using the HTML form, users can specify...
  - [ ] host and path
  - [ ] HTTP verb/method
  - [ ] query parameter keys + values
  - [ ] header keys + values
  - [ ] request body

### Stretch

Use the stretch goals to go deeper into the nuts and bolts of HTTP.

- [ ] Sandbox server is written using _only the core Node.js modules_ (instead of Express, use the built-in [HTTP module][node-http]).
- [ ] Users of Postalicious can "save" their requests in a history panel
- [ ] Clicking on a saved request will re-load it into the form
- [ ] Using Postalicious, create some HTTP requests to various real-world APIs:
  - [ ] Get all issues for a repo through the GitHub API
  - [ ] Get all tweets with the hashtag `#javascript` with the Twitter API
  - [ ] Any other API request(s) of your choice
  - [ ] External HTTP requests are saved in files under a `example-requests/` directory (make sure to obscure any secure information before saving these files, like your password or authentication token)
