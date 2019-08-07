/*
 * List of rules to be more tolerant of than the recommended level,
 *  grouped by purpose.
 * This is largely so we have a stronger signal-to-noise ratio
 *  when looking at our existing code.
 * We should fix the existing offenders of these rules
 *  and remove these exceptions (as time permits)
 */
const tolerantRuleGroupings = [
  {
    label: 'accessibility',
    ruleNames: [
      'jsx-a11y/alt-text',
      'jsx-a11y/anchor-is-valid',
      'jsx-a11y/click-events-have-key-events',
      'jsx-a11y/iframe-has-title',
      'jsx-a11y/img-redundant-alt',
      'jsx-a11y/label-has-associated-control',
      'jsx-a11y/media-has-caption',
      'jsx-a11y/no-noninteractive-element-interactions',
      'jsx-a11y/no-static-element-interactions',
    ],
    level: 'warn',
  },
  {
    label: 'immutability',
    ruleNames: [
      'import/no-mutable-exports',
      'prefer-const',
      'no-param-reassign',
    ],
    level: 'warn',
  },
  {
    label: 'reactDeprecation',
    ruleNames: ['react/no-find-dom-node', 'react/no-string-refs'],
    level: 'warn',
  },

  {
    label: 'performance',
    ruleNames: ['react/jsx-no-bind', 'react/no-array-index-key'],
    level: 'warn',
  },
  {
    label: 'es6Style',
    ruleNames: ['prefer-destructuring', 'prefer-rest-params'],
    level: 'warn',
  },
  {
    label: 'stylisticChoice',
    ruleNames: [
      'import/order',
      'no-extra-boolean-cast',
      'no-nested-ternary',
      'no-multi-assign',
      'object-shorthand',
      'prefer-arrow-callback',
      'react/destructuring-assignment',
      'react/sort-comp',
    ],
    level: 'warn',
  },
  {
    label: 'reactComponentStyle',
    ruleNames: ['react/prefer-es6-class', 'react/prefer-stateless-function'],
    level: 'warn',
  },
  {
    label: 'propTypes',
    ruleNames: ['react/prop-types', 'react/forbid-prop-types'],
    level: 'warn',
  },
  {
    label: 'quality',
    ruleNames: ['no-lonely-if', 'consistent-return'],
    level: 'warn',
  },
  {
    label: 'pedantic',
    ruleNames: [
      'no-plusplus',
      'no-prototype-builtins',
      'no-script-url',
      'no-useless-escape',
      'radix',
    ],
    level: 'warn',
  },
  {
    label: 'namingConventions',
    ruleNames: ['camelcase', 'no-underscore-dangle', 'react/jsx-pascal-case'],
    level: 'off',
  },
  {
    label: 'potentialGotchas',
    ruleNames: [
      'default-case',
      'guard-for-in',
      'no-bitwise',
      'no-cond-assign',
      'no-new',
      'no-restricted-globals',
      'no-restricted-syntax',
      'no-unused-expressions',
      'no-use-before-define',
      'react/no-access-state-in-setstate',
    ],
    level: 'warn',
  },
];

module.exports = {
  extends: ['./.eslintrc.base.js'],
  rules: {
    ...getRuleSet(),
  },
};

function getRuleSet() {
  return combineRuleObjs(
    tolerantRuleGroupings.map(exceptionGroup =>
      ruleNamesToRuleObj(exceptionGroup)
    )
  );
}

function combineRuleObjs(ruleObjs) {
  return ruleObjs.reduce(
    (allRuleObj, ruleObj) => ({
      ...allRuleObj,
      ...ruleObj,
    }),
    {}
  );
}

function ruleNamesToRuleObj(ruleGroup) {
  return ruleGroup.ruleNames.reduce(
    (rules, ruleName) => ({
      ...rules,
      [ruleName]: ruleGroup.level || 'warn',
    }),
    {}
  );
}
