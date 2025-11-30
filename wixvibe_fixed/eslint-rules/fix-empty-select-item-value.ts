// ... (omitted imports and meta)

  create(context: Rule.RuleContext): Rule.RuleListener {
    return {
      JSXElement(node: JSXElement) {
        const { openingElement } = node;

        if (openingElement.name?.type !== 'JSXIdentifier' ||
            openingElement.name.name !== 'SelectItem') {
          return;
        }

        const valueAttr = openingElement.attributes.find(
          (attr): attr is JSXAttribute =>
            attr.type === 'JSXAttribute' &&
            attr.name?.type === 'JSXIdentifier' &&
            attr.name.name === 'value'
        );

        if (!valueAttr?.value) return;

        const isEmptyString =
          valueAttr.value.type === 'Literal' &&
          (valueAttr.value as Literal).value === '';

        if (isEmptyString) {
          // This is the part that reports the error and provides the fix.
          context.report({
            node: valueAttr.value,
            messageId: 'emptyValue',
            // **THE FIX:** Replaces the empty string with "all"
            fix: (fixer) => fixer.replaceText(valueAttr.value!, '"all"'),
          });
        }
      },
    };
  },
};