import React from 'react';

import { black, blue, violet, blueLight, blueDark } from '../constants/colors';

export default ({
  borderColor, 
  borderWidth, 
  dotColor,
  dotLeft, 
  dotSize,
  dotTop, 
  screenHeight,
  screenWidth,
  textColor 
}) => (
  <div 
    style={{
      alignItems: 'center',
      fontSize: screenWidth * .015,
      justifyContent: 'center',
      left: `${screenWidth * dotLeft}px`,
      position: 'absolute',
      top: `${screenHeight * dotTop}px`,
    }}
  >
    <div 
      style={{
        backgroundColor: dotColor,
        border: `${borderWidth}vw solid` + borderColor,
        borderRadius: `${screenWidth * dotSize}px`,
        color: textColor,
        height: `${screenWidth * dotSize}px`,
        overflow: 'hidden',
        textAlign: 'center',
        width: `${screenWidth * dotSize}px`,
      }}
    >
      
      <h1>Why This Site?</h1>
    
      <p>
        I am interested in things.  Some of them intersect.  Some of them don't.
      </p>
      <p>
        Let me stop and be very clear.  Let me be direct.  
      </p>
      <p>
        This is not a blog.  
        I don't like blogs - though I do enjoy writing and I love to read.
        I am a fan of literature.  I love fiction.  
        I can take sci-fi home and read it until I'm bleary eyed and 
        heavy with sleep.  But I don't understand blogs.
      </p>
      <p>
        So this is not a blog.
      </p>
      <p>
        We may have to discover what it is together.
      </p>
      <p>      
        A showcase, I suppose?  A little shelf on the dining room wall of the internet where 
        I prop up my curios?  Hmmm.  Honestly, I find that idea vaguely distastful.  
        A triffle tawdry.  A tad desperate.  
      </p>
      <p>
        However...
        I have an ever increasing need to display.  To be seen.  Maybe that IS tawdry.  An ugly truth.
        I want to put on rooftop concerts and take up theater.  I want to 
        dance publicly and with great abandon.  A great and terrible truth.  I get vague ideas about 
        grafitti when I see spray cans.  I don't want to write, I want to monologue.  
      </p>
      <p>
        None of that is true.  Maybe a version of truth about a younger me.  Maybe not even 
        that.  I don't want to be on display.  But I do desperately want my writings and 
        music and artwork to be seen and heard.  To be felt.  
      </p>
      <p>
        The internet is almost as good a way of getting my ideas in front of the public 
        as posting them in an envelope which I then set fire to. I know this.  The internet is a black hole 
        filled with the noise of a billion screaming humans.  It can't be filled and it's impossible to be heard.
        But I can't simply make things anymore.  The things want more than 
        simply to be made.  
      </p>
      <p>
        This will have to do.
      </p>
      <p>
        Maybe it will help.
      </p>
    </div>
  </div>
)
 
let styles = {
};
