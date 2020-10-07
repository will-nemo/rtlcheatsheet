/**
 * Matches `render(anyVariable)` property
 */
const renderVariablePattern = /render\([a-zA-Z_]\w*\)/g;
const renderImportPattern = /render/g;

/**
 * Matches `render(<Component />)` property
 */
const renderWhiteSpaceComponentPattern = /render\(\<[a-zA-Z_]\w*\s\/\>\)/g;

/**
 * Matches `render(<Component/>)` property
 */
const renderComponentPattern = /render\(\<[a-zA-Z_]\w*\/\>\)/g;
const screenPattern = /screen/g;
const userEventPattern = /userEvent/g;
const debugImportPattern = /debug/g;
const debugPattern = /debug\(\)/g;
const debugElementPattern = /debug\([a-zA-Z_]\w*\)/g;
const getByPattern = /getBy/g;
const getAllByPattern = /getAllBy/g;
const queryByPattern = /queryBy/g;
const queryAllByPattern = /queryAllBy/g;
const findByPattern = /findBy/g;
const findAllByPattern = /findAllBy/g;
const waitForPattern = /waitFor/g;
const waitForElementToBeRemovedPattern = /waitForElementToBeRemoved/g;
const hydratePattern = /hydrate/g;
const wrapperPattern = /wrapper/g;
const rolePattern = /Role/g;
const labelTextPattern = /LabelText/g;
const placeholderTextPattern = /PlaceholderText/g;
const textPattern = /Text/g;
const displayValuePattern = /DisplayValue/g;
const altTextPattern = /AltText/g;
const titlePattern = /Title/g;
const testIdPattern = /TestId/g;

const renderVariable = {
  pattern: renderVariablePattern,
  link: 'https://testing-library.com/docs/marko-testing-library/api#render'
};
const renderImport = {
  pattern: renderImportPattern,
  link: 'https://testing-library.com/docs/marko-testing-library/api#render'
};
const renderComponent = {
  pattern: renderComponentPattern,
  link: 'https://testing-library.com/docs/marko-testing-library/api#render'
};
const renderWhiteSpaceComponent = {
  pattern: renderWhiteSpaceComponentPattern,
  link: 'https://testing-library.com/docs/marko-testing-library/api#render'
};
const screen = {
  pattern: screenPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#screen'
};
const userEvent = {
  pattern: userEventPattern,
  link: 'https://testing-library.com/docs/ecosystem-user-event'
};
const debug = {
  pattern: debugPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#screendebug'
};
const debugImport = {
  pattern: debugImportPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#screendebug'
};
const debugElement = {
  pattern: debugElementPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#screendebug'
};
const getBy = {
  pattern: getByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#getby'
};
const getAllBy = {
  pattern: getAllByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#getallby'
};
const queryBy = {
  pattern: queryByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#queryby'
};
const queryAllBy = {
  pattern: queryAllByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#queryallby'
};
const findBy = {
  pattern: findByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#findby'
};
const findAllBy = {
  pattern: findAllByPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#findallby'
};
const waitFor = {
  pattern: waitForPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-async#waitfor'
};
const waitForElementToBeRemoved = {
  pattern: waitForElementToBeRemovedPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-async#waitforelementtoberemoved'
};
const hydrate = {
  pattern: hydratePattern,
  link: 'https://testing-library.com/docs/react-testing-library/api#hydrate'
};
const wrapper = {
  pattern: wrapperPattern,
  link: 'https://testing-library.com/docs/react-testing-library/api#wrapper'
};
const role = {
  pattern: rolePattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#byrole'
};
const labelText = {
  pattern: labelTextPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext'
};
const placeholderText = {
  pattern: placeholderTextPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#byplaceholdertext'
};
const text = {
  pattern: textPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#bytext'
};
const displayValue = {
  pattern: displayValuePattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#bydisplayvalue'
};
const altText = {
  pattern: altTextPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#byalttext'
};
const title = {
  pattern: titlePattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#bytitle'
};
const testId = {
  pattern: testIdPattern,
  link: 'https://testing-library.com/docs/dom-testing-library/api-queries#bytestid'
};

const allRTLPatterns = [
  renderVariable,
  renderImport,
  renderComponent,
  renderWhiteSpaceComponent,
  screen,
  userEvent,
  debug,
  debugElement,
  debugImport,
  getBy,
  getAllBy,
  queryBy,
  queryAllBy,
  findBy,
  findAllBy,
  waitFor,
  waitForElementToBeRemoved,
  hydrate,
  wrapper,
  role,
  labelText,
  placeholderText,
  text,
  displayValue,
  altText,
  title,
  testId,
];

module.exports = {
  allRTLPatterns,
};
