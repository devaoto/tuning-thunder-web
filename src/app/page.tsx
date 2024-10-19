import FAQAccordion from "@/components/home/faq";
import Header from "@/components/home/header";
import Section from "@/components/home/section";

export default function Home() {
  return (
    <div className="p-8 lg:p-24">
      <Header />
      <div id="about" className="mt-32">
        <Section
          label="About Tuning Thunder"
          description="Tuning Thunder is a powerful and versatile music bot for Discord. It allows you to play music from various sources, manage playlists, and interact with your server members in a fun and engaging way. Whether you're hosting a party or just chilling with friends, Tuning Thunder is here to provide the soundtrack."
          animationStart="bottom"
          imagePosition="left"
          contentPosition="center"
        />
      </div>
      <div className="mt-32">
        <Section
          label="Unleash the Power of Music"
          description="Dive into a seamless music experience! Stream your favorite tracks from YouTube, Spotify, and beyond. Effortlessly curate playlists, command playback with ease, and enjoy a responsive, interactive interface built to keep the rhythm flowing."
          animationStart="left"
          imagePosition="right"
          contentPosition="left"
          image="/features.png"
        />
      </div>
      <div className="mt-32">
        <Section
          label="A Design Beyond Imagination"
          description="Tuning Thunder’s design isn’t just stunning—it’s revolutionary. Crafted to captivate, the sleek interface elevates every interaction, making your experience unforgettable."
          animationStart="right"
          imagePosition="left"
          contentPosition="right"
          image="/nowplaying.png"
        />
      </div>
      <div className="mt-32">
        <Section
          label="Lightning-Fast Performance"
          description="With Tuning Thunder, speed is no longer a luxury—it’s a given. Experience unparalleled performance that moves as fast as lightning, keeping up with your every beat."
          animationStart="left"
          imagePosition="right"
          contentPosition="left"
          image="/speed.png"
        />
      </div>
      <div className="mt-52">
        <FAQAccordion />
      </div>
    </div>
  );
}
