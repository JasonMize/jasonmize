import React from 'react';

class HomeScreen extends React.Component {
  render () {
    return (
      <div>

        <div>
          <img src="images/jasonmize.png" />
        </div>

        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/music-band">Music - Band</a></li>
            <li><a href="/music-solo">Music - Solo</a></li>
            <li><a href="/collage">Collage</a></li>
          </ul>
        </div>
          


        <h1>Why This Site?</h1>
        <div className="ramblings">
          <p>
            I am interested in things.  Some of them intersect.  Some of them don't.
          </p>
          <p>
            Let me stop there and be very clear.  Let me be direct.  
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
            A showcase?  I suppose?  A little shelf on the dining room wall of the internet where 
            I prop up my curios?  Hmmm.  Honestly, I find that idea vaguely distastful.  
            A triffle tawdry.  A tad desperate.  
          </p>
          <p>
            However...
            I have an ever increasing need to display.  To be seen.  Maybe that IS tawdry.  An ugly truth.
            I want to put on rooftop concerts and take up theater.  I want to 
            dance publicly and with great abandon.  I get vague ideas about 
            grafitti when I see spray cans.  I don't want to write, I want to monologue.  
          </p>
          <p>
            The internet is almost as good a way of getting my ideas in front of the public 
            as posting them in an envelope which I then set fire to. I know this.
            But it doesn't seem to be enough to simply make things.  The things want more than 
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
    );
  }
}

export default HomeScreen;
