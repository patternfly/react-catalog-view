import React from 'react';
import { ExtendedButton } from '{{ tmplr.npm_scope }}/{{ tmplr.extension_name | kebab-case }}';

export const BasicExample: React.FunctionComponent = () => <ExtendedButton>My custom extension button</ExtendedButton>;
