function getWebViewContent(cspSource, stylePath) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource};">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React Testing Library Cheatsheet</title>
      <link rel="stylesheet" href="${stylePath}/custom.css">
    </head>

    <body>
      <main>
        <h1>RTL Cheatsheet</h1>
        <h3>Simple and complete cheat sheet</h3>
        <div class="pdf-link">Find the PDF version <a href="https://github.com/testing-library/react-testing-library/raw/master/other/cheat-sheet.pdf" target="_blank" rel="noopener">here</a></div>

        <div class="info-container">
          <div class="info-container-header">
            <p>render a component</p>
          </div>
          <div class="info-container-body">
            <p><span class="red">import</span> { <span class="blue">render</span> } <span class="red">from</span> <span class="orange">'@testing-library/react'</span></p>
            <p><span class="red">const</span> <span class="blue">result</span>  = render(&lt;MyComponent /&gt;)</p>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>search the DOM</p>
          </div>
          <div class="info-container-body">
            <p><span class="red">import</span> { <span class="blue">screen</span>, <span class="blue">render</span> } <span class="red">from</span> <span class="orange">'@testing-library/react'</span></p>
            <p>render(<br/>
              &nbsp;&nbsp;<span class="green">&lt;label&gt;</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;Remember Me <span class="green">&lt;input</span> <span class="blue">type=</span><span class="orange">"checkbox"</span> <span class="green">/&gt;</span><br/>
              &nbsp;&nbsp;<span class="green">&lt;/label&gt;</span>,<br/>
            )
            </p>
            <p><span class="red">const</span> <span class="blue">checkboxInput</span> = screen.getByRole(<span class="orange">'checkbox'</span> , {<br/>
              &nbsp;&nbsp;name: <span class="orange">/remember me/i</span>,<br/>
              })
            <p/>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>interact with element</p>
          </div>
          <div class="info-container-body">
            <p><span class="red">import</span> { <span class="blue">userEvent</span> } from <span class="orange">'@testing-library/react'</span></p>
            <p>// userEvent simulates advanced browser interactions like<br/>
            // clicks, type, uploads, tabbing etc<br/>
            // Click on a button</p>
            <p>userEvent.click(screen.getByRole(<span class="orange">'button'</span>))</p>
            <p>// Types HelloWorld in a text field<br/>
            userEvent.type(screen.getByRole(<span class="orange">'textbox'</span>), <span class="orange">'Hello World'</span>)
            </p>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>screen</p>
          </div>
          <div class="info-container-body">
            <div class="info-container-body-row">
              <b>debug(element)</b>
              <span>Pretty print the DOM</span>
            </div>
            <div class="info-container-body-row">
              <b>...queries</b>
              <span>Functions to query the DOM</span>
            </div>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>search variants</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(result)</p>
          </div>
          <div class="info-container-body">
            <div class="info-container-body-row">
              <b>getBy</b>
              <span>Element or Error</span>
            </div>
            <div class="info-container-body-row">
              <b>getAllBy</b>
              <span>Element[] or Error</span>
            </div>
            <div class="info-container-body-row">
              <b>queryBy</b>
              <span>Element or null</span>
            </div>
            <div class="info-container-body-row">
              <b>queryAllBy</b>
              <span>Element[] or []</span>
            </div>
            <div class="info-container-body-row">
              <b>findBy</b>
              <span>Promise&lt;Element&gt; or Promise&lt;rejection&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>findAllBy</b>
              <span>Promise&lt;Element[]&gt; or Promise&lt;rejection&gt;</span>
            </div>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>search types</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(result)</p>
          </div>
          <div class="info-container-body">
            <div class="info-container-body-row">
              <b>Role</b>
              <span>&lt;div role='dialog'&gt;...&lt;/div&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>LabelText</b>
              <span>&lt;label for="element" /&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>PlaceholderText</b>
              <span>&lt;input placeholder="username" /&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>Text</b>
              <span>&lt;a href='/about'&gt;About&lt;/a&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>DisplayValue</b>
              <span>&lt;input value="display value" /&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>AltText</b>
              <span>&lt;img alt="movie poster" /&gt;</span>
            </div>
            <div class="info-container-body-row">
              <b>Title</b>
              <span>&lt;span title='Delete' /&gt; or &lt;title /&gt</span>
            </div>
            <div class="info-container-body-row">
              <b>TestId</b>
              <span>&lt;input data-testid='username-input' /&gt;</span>
            </div>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>text matches</p>
          </div>
          <div class="info-container-body">
            <p>render(<span class="green">&lt;label&gt;</span>Remember Me <span class="green">&lt;input</span> <span class="blue">type=</span><span class="orange">"checkbox"</span> <span class="green">/&gt;&lt;/label&gt;</span>)</p>
            <p>screen.getByRole(<span class="orange">'checkbox'</span>, {name: <span class="orange">/remember me/i</span>}) // ✅<br/>
            screen.getByRole(<span class="orange">'checkbox'</span>, {name: <span class="orange">'remember me'</span>})     // ❌<br/>
            screen.getByRole(<span class="orange">'checkbox'</span>, {name: <span class="orange">'Remember Me'</span>})     // ✅</p>
            <p>// other queries accept text matches as well <br/>
            // the text match argument can also be a function <br/>
            screen.getByText((<span class="blue">text</span>, <span class="blue">element</span>) => {/* return true/false <br/>
            */})
            </p>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>wait for appearance</p>
          </div>
          <div class="info-container-body">
            <p>test(<span class="orange">'movie title appears'</span>, <span class="red">async</span> () => { <br/>
              &nbsp;&nbsp;render(<span class="green">&lt;Movie /&gt;</span>)</p>
            <p>&nbsp;&nbsp;// the element isn't available yet, so wait for it:<br/>
            &nbsp;&nbsp;<span class="red">const</span> <span class="blue">movieTitle</span> = <span class="red">await</span> screen.findByText( <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="orange">/the lion king/i,</span><br/>
              &nbsp;&nbsp;)
            </p>
            <p>&nbsp;&nbsp;// the element is there but we want to wait for it <br/>
            &nbsp;&nbsp;// to be removed <br/>
            &nbsp;&nbsp;<span class="red">await</span> waitForElementToBeRemoved(() => <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;screen.getByLabelText(<span class="orange">/loading/i</span>), <br/>
            &nbsp;&nbsp;)
            </p>
            <p>
            &nbsp;&nbsp;// we want to wait until an assertion passes <br/>
            &nbsp;&nbsp;<span class="red">await</span> waitFor(() => <br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;expect(mockFn).toHaveBeenCalledWith(<span class="orange">'some arg'</span>), <br/>
            &nbsp;&nbsp;) <br/>
            })
            </p>
          </div>
        </div>

        <div class="info-container">
          <div class="info-container-header">
            <p>render() options</p>
          </div>
          <div class="info-container-body">
            <div class="info-container-body-row">
              <b>hydrate</b>
              <span>If true, will render with ReactDOM.hydrate</span>
            </div>
            <div class="info-container-body-row">
              <b>wrapper</b>
              <span>React component which wraps the passed ui</span>
            </div>
          </div>
        </div>

      </main>
    </body>
  </html>`;
}

module.exports = { getWebViewContent }