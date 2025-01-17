import React from 'react';
import { storiesOf } from '@storybook/react';

import cta from './cta.twig'
const ctaTwig = (
  cta({
    cta__heading: "This is a reason to act",
    cta__button_text: "Click here"
  })
)

/**
 * Add storybook definition for CTAs.
 */
storiesOf('Molecules/CTA', module)
  .add('cta', () =>
    <div dangerouslySetInnerHTML={{__html: ctaTwig}}></div>
  )
