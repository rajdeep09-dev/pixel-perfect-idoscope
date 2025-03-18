
import React from 'react';
import { Play, Dumbbell, LineChart, Users } from 'lucide-react';

const Features = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-neon text-sm font-medium">Why this fits</span>
            <h2 className="heading-lg">
              <span className="text-outline">CREATE YOUR</span> FITNESS <br />
              JOURNEY WITH US
            </h2>
            <p className="body-text">
              Discover why fitness enthusiasts choose our platform for their transformation journey. With customized training plans, expert guidance, and a supportive community, we're dedicated to helping you achieve your fitness goals efficiently and sustainably.
            </p>
            <div className="relative aspect-video w-full">
              <img 
                src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="Training session" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-neon rounded-full flex items-center justify-center animate-pulse-neon">
                  <Play fill="black" className="w-6 h-6 text-dark ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="heading-md text-outline mb-10">
              FUEL YOUR AMBITION <br />
              IGNITE YOUR <span className="text-white">PASSION</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-neon flex items-center justify-center rounded-lg">
                  <Dumbbell className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-bold text-xl">PERSONALIZED CUSTOM ROUTINES</h3>
                <p className="text-gray-400 text-sm">Get workout plans tailored to your unique goals, fitness level, and preferences to maximize your results efficiently.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-neon flex items-center justify-center rounded-lg">
                  <Users className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-bold text-xl">EXPERT TRAINERS AND GUIDANCE</h3>
                <p className="text-gray-400 text-sm">Learn from certified professionals who provide real-time feedback, form corrections, and motivational coaching.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-neon flex items-center justify-center rounded-lg">
                  <LineChart className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-bold text-xl">PROGRESS TRACKING AND ACHIEVEMENTS</h3>
                <p className="text-gray-400 text-sm">Monitor your fitness journey with detailed metrics, celebrate milestones, and stay motivated with visual progress reports.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-neon flex items-center justify-center rounded-lg">
                  <Users className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-bold text-xl">FLEXIBLE PLANS AVAILABILITY</h3>
                <p className="text-gray-400 text-sm">Access your workouts anytime, anywhere with options for home, gym, or outdoor training to fit your busy schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
