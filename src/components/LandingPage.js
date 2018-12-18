import React from 'react';
import { css as glamor } from 'glamor';
import { itchColor, sparkColor } from '../colors'
import FadeIn from 'react-fade-in'

const landingPageStyles = glamor({
  display: 'flex',
});

const landingPageSectionStyles = glamor({
  flexGrow: '1',
  height: '90vh',
  display: 'flex',
  alignItems: 'center'
});

const landingPageCopySectionPadding = '10px';

const itchStyles = glamor({
  backgroundColor: itchColor,
  justifyContent: 'flex-end',
  paddingRight: landingPageCopySectionPadding,
});

const sparkStyles = glamor({
  backgroundColor: sparkColor,
  color: 'white',
  justifyContent: 'flex-start',
  paddingLeft: landingPageCopySectionPadding,
});

const LandingPage = () => {
  return (
    <div id='LandingPage' className={`page ${landingPageStyles}`}>
      <div id='LandingPage-itch' className={`${landingPageSectionStyles} ${itchStyles}`}>
        <div className='copy'>itch</div>
      </div>
      <FadeIn>
        <div id='LandingPage-spark' className={`${landingPageSectionStyles} ${sparkStyles}`}>
          <div className='copy'>spark</div>
        </div>
      </FadeIn>
    </div>
  )
}

export default LandingPage
