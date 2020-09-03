/**
 * Matches `render(anyVariable)` property
 */
const renderVariablePattern = /render\([a-zA-Z_]\w*\)/g;

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

const debugPattern = /debug\(\)/g;

const debugElementPattern = /debug\([a-zA-Z_]\w*\)/g;

const getByPattern = /getBy/g;
const getAllByPattern = /getAllBy/g;
const queryByPattern = /queryBy/g;
const queryAllByPattern = /queryAllBy/g;
const findByPattern = /findBy/g;
const findAllByPattern = /findAllBy/g;
const waitForPattern = /waitFor/g;
const waitForElementToBeRemovedPattern = /waitFor/g;
const hydratePattern = /hydrate/g;
const wrapperPattern = /wrapper/g;

const allRTLPatterns = [
  renderVariablePattern,
  renderComponentPattern,
  renderWhiteSpaceComponentPattern,
  screenPattern,
  userEventPattern,
  debugPattern,
  debugElementPattern,
  getByPattern,
  getAllByPattern,
  queryByPattern,
  queryAllByPattern,
  findByPattern,
  findAllByPattern,
  waitForPattern,
  waitForElementToBeRemovedPattern,
  hydratePattern,
  wrapperPattern,
];

module.exports = {
  allRTLPatterns,
};
