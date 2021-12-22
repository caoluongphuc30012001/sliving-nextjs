import React from "react";
import bright from "@images/content-page/placeholder.png";
import car from "@images/content-page/image.png";
import BotBanner from '@images/support-page-v2-img/banner1.jpg'

const ContentDetail = ({ pageContext }) => {
  return (
    <section className="contentDetail">
      <h1 className="mt-5">
        Using Banner Stands to Increase Trade Show Traffic
      </h1>
      <div>
        <p>
          Have you ever finally just gave in to the temptation and read your
          horoscope in the newspaper on Sunday morning? Sure, we all have. For
          most of us, it’s a curiosity, an amusement to see what they say our
          day will be like based on the sign of the zodiac that we were born
          under. Sometimes we forget that this little diversion is actually part
          of an ancient science called astrology that has had a powerful effect
          on many cultures dating
        </p>
        <div><img src={bright} alt="bright" /></div>
        <h5>Motivation How To Build Trust At Work</h5>
        <p>
          No matter how far along you are in your sophistication as an amateur
          astronomer, there is always one fundamental moment that we all go back
          to. That is that very first moment that we went out where you could
          really see the cosmos well and you took in the night sky. For city
          dwellers, this is a revelation as profound as if we discovered aliens
          living among us. Most of us have no idea the vast panorama of lights
          that dot a clear night sky when there
        </p>
        <p>
          While your neighbors are putting up their Halloween decorations and
          scouring supermarkets for bargain candy, it’s the perfect time for you
          to deep fry a turkey. If you’ve been thinking about deep frying a
          turkey for Thanksgiving but want to try it first, then October is the
          perfect time. It’s close enough to Thanksgiving for you to gain some
          valuable experience but still far enough away that your family won’t
          get tired of turkey sandwiches.
        </p>
        <div><img src={car} alt="car" /></div>
        <p>
          It is probably the dream of any amateur astronomer to be able to be
          the boss of one of the great multi million dollar telescopes even if
          it was just for one hour or for a few shots. Sure, we can have a lot
          of fun with our binoculars. And as we improve our personal equipment
          set, we get better and better at pinpointing what we want to see in
          the sky.But there is only so far we can go within the constraints of a
          family budget in building the perfect telescopic operation. Probably
          the next level then is to work together with others in your astronomy
          club. By pooling our resources, we can make more progress both in
          acquiring much more sophisticated equipment and in synchronizing our
          telescopic operations.
        </p>
      </div>
      <div className="footerContent"><span>Share:</span><span className="icon">f</span><div>45</div></div>
      <div class="bot-banner" >
        <img class="bot-banner-img" src={BotBanner} alt="bottom banner" />
      </div>
    </section>
  );
};
export default ContentDetail;
