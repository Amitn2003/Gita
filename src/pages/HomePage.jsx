import React from 'react';
import { Link } from 'react-router-dom';
import templeImg from '../assets/ram-temple.png'; // Example image
import gitaImg from '../assets/gita-theme-image.jpg'; // Example image
import gitaStarting from '../assets/gita-110.jpg'; // Example image

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-center py-16 shadow-lg ">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-amber-800 mb-4 eng-sanskrit">Discover the Wisdom of the Bhagavad Gita</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The timeless scripture that has guided millions across centuries. Explore its profound teachings, 
            practical wisdom, and spiritual essence.
          </p>
          <Link
            to="/daily-verse"
            className="px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded shadow hover:bg-amber-700 "
          >
            Explore Daily Verse
          </Link>
        </div>
      </section>


{/* Chapter List Section */}
<section className="py-16 bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-amber-900 mb-6 eng-sanskrit">Explore All Chapters</h2>
    <p className="text-lg text-gray-700 mb-6">
      Discover the wisdom of the Bhagavad Gita, chapter by chapter. Dive deep into its timeless teachings.
    </p>
    <Link
      to="/chapters"
      className="px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded shadow hover:bg-amber-700 transition-transform duration-300 transform hover:scale-105 "
    >
      View Chapter List
    </Link>
  </div>
</section>





      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mx-5">
            <img src={gitaImg} alt="Bhagavad Gita Manuscript"  loading="lazy"  className="rounded shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-amber-800 mb-4 eng-sanskrit">About the Bhagavad Gita</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              The Bhagavad Gita, a 700-verse scripture part of the Indian epic Mahabharata, is a dialogue 
              between Prince Arjuna and Lord Krishna. It explores profound concepts such as duty, righteousness, 
              and the path to self-realization.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Known as the "Song of God," it has been a spiritual guide for philosophers, leaders, and 
              spiritual seekers for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section className="py-16 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300 ">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center eng-sanskrit">Benefits of Reading the Bhagavad Gita</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Spiritual Growth</h3>
        <p className="text-gray-700">
          The Gita helps in self-realization and understanding the deeper truths of life and the universe.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit" >Mental Clarity</h3>
        <p className="text-gray-700">
          It provides profound wisdom to handle life's challenges with equanimity and clarity.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Practical Guidance</h3>
        <p className="text-gray-700">
          The Gita teaches the importance of performing duties selflessly, without attachment to results.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Inner Peace</h3>
        <p className="text-gray-700">
          By emphasizing the importance of detachment and self-discipline, the Gita helps attain lasting inner peace.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Improved Focus</h3>
        <p className="text-gray-700">
          The Gita promotes mindfulness and concentration, helping individuals stay focused on their tasks without distraction.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Enhanced Emotional Resilience</h3>
        <p className="text-gray-700">
          The teachings of the Gita build emotional strength, enabling individuals to face challenges with poise and grace.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Universal Wisdom</h3>
        <p className="text-gray-700">
          The Gita transcends cultural and religious boundaries, offering wisdom that applies to all of humanity.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Better Decision Making</h3>
        <p className="text-gray-700">
          The Gita encourages thoughtful reflection, helping individuals make better decisions based on wisdom and virtue.
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2 eng-sanskrit">Strengthened Relationships</h3>
        <p className="text-gray-700">
          By teaching selfless love and compassion, the Gita fosters stronger, more harmonious relationships with others.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Famous Quotes Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 eng-sanskrit">Famous Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <blockquote className="bg-white shadow-md p-6 rounded">
              <p className="italic text-gray-700">"The Bhagavad Gita is a spiritual dictionary."</p>
              <footer className="mt-4 text-amber-800 font-semibold">- Swami Vivekananda</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md p-6 rounded">
              <p className="italic text-gray-700">
                "When I read the Bhagavad Gita and reflect about how God created this universe, everything else seems so superfluous."
              </p>
              <footer className="mt-4 text-amber-800 font-semibold">- Albert Einstein</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md p-6 rounded">
              <p className="italic text-gray-700">
                "The Bhagavad Gita has been the cornerstone of my success."
              </p>
              <footer className="mt-4 text-amber-800 font-semibold">- Steve Jobs</footer>
            </blockquote>
            <blockquote className="bg-white shadow-md p-6 rounded">
        <p className="italic text-gray-700">"In the morning I bathe my intellect in the stupendous and cosmogonal philosophy of the Bhagavad Gita."</p>
        <footer className="mt-4 text-amber-800 font-semibold">- Henry David Thoreau</footer>
      </blockquote>
      <blockquote className="bg-white shadow-md p-6 rounded">
        <p className="italic text-gray-700">"The Bhagavad Gita has a profound influence on the spirit of mankind by its devotion to God."</p>
        <footer className="mt-4 text-amber-800 font-semibold">- Herman Hesse</footer>
      </blockquote>
      <blockquote className="bg-white shadow-md p-6 rounded">
        <p className="italic text-gray-700">
          "The Gita is not only an ancient scripture but a living, breathing philosophy for all ages."
        </p>
        <footer className="mt-4 text-amber-800 font-semibold">- Carl Jung</footer>
      </blockquote>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Section */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mx-5">
      <img
        src={gitaStarting}
        alt="Bhagavad Gita Manuscript"
        className="w-full h-auto rounded shadow-lg"
        loading="lazy" 
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center md:text-left eng-sanskrit">
        History of the Bhagavad Gita
      </h2>
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 eng-sanskrit">
        The Bhagavad Gita, composed over 5,000 years ago, is a part of the Indian epic Mahabharata. It
        captures the divine dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra.
      </p>
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed eng-sanskrit">
        The scripture has transcended time and space, influencing great thinkers, leaders, and spiritual
        seekers worldwide.
      </p>
    </div>
  </div>
</section>



      {/* Commentary Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center ">Commentaries by Renowned Thinkers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Swami Prabhupada</h3>
              <p className="text-gray-700">
                "The Bhagavad Gita is a comprehensive guide on how to live a meaningful life through devotion 
                and understanding of the soul's eternal relationship with God."
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Sri Aurobindo</h3>
              <p className="text-gray-700">
                "The Gita gives us a profound and flexible method to rise to spiritual perfection."
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-lg font-bold text-amber-800 mb-2">Mahatma Gandhi</h3>
              <p className="text-gray-700">
                "The Gita is my eternal mother. When I am in doubt or despair, it has always comforted me."
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2">Dr. S. Radhakrishnan</h3>
        <p className="text-gray-700">
          "The Gita is the greatest philosophical poem. It has inspired not only Indians but many
          others in the world."
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2">Eknath Easwaran</h3>
        <p className="text-gray-700">
          "The Bhagavad Gita offers something for everyone – from practical advice to deep spiritual truths."
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded">
        <h3 className="text-lg font-bold text-amber-800 mb-2">Paramahansa Yogananda</h3>
        <p className="text-gray-700">
          "The Bhagavad Gita is a timeless roadmap for our journey to self-realization."
        </p>
      </div>
          </div>
        </div>
      </section>
      <div className="py-2 flex justify-center items-center">
  <Link
    to="/chapters"
    className="px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded shadow hover:bg-amber-700 transition-transform duration-300 transform hover:scale-105"
  >
    View Chapter List
  </Link>
</div>


    </div>
  );
};

export default HomePage;
