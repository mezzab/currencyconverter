export const asyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => (action[argNames[index]] = args[index]));
  return action;
};

export const makeRequestActionCreator = asyncType => ({
  pending: makeActionCreator(asyncType.PENDING, 'params'),
  success: makeActionCreator(asyncType.SUCCESS, 'response', 'params'),
  error: makeActionCreator(asyncType.ERROR, 'error'),
});
