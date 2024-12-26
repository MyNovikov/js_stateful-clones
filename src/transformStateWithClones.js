'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
'use strict';

function transformStateWithClones(initialState, operations) {
  const result = [];
  let currentState = { ...initialState };

  for (const operation of operations) {
    if (operation.type === 'addProperties') {
      currentState = { ...currentState, ...operation.extraData };
    } else if (operation.type === 'removeProperties') {
      currentState = Object.keys(currentState)
        .filter((key) => !operation.keysToRemove.includes(key))
        .reduce((newState, key) => {
          newState[key] = currentState[key];

          return newState;
        }, {});
    } else if (operation.type === 'clear') {
      currentState = {};
    }

    result.push({ ...currentState });
  }

  return result;
}

module.exports = transformStateWithClones;
