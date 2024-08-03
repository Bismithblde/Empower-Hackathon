import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimationContext = createContext();

export const useAnimationContext = () => {
  return useContext(AnimationContext);
};

export const AnimationProvider = ({ children }) => {
  const [animationAchievement, setAnimationAchievement] = useState(null);

  const triggerAnimation = (achievement) => {
    if (achievement.animationTriggered) {
      return achievement;
    }
    achievement.animationTriggered = true;
    setAnimationAchievement(achievement);
    return achievement;
  };

  useEffect(() => {
    if (animationAchievement) {
      const timer = setTimeout(() => {
        setAnimationAchievement(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [animationAchievement]);

  return (
    <AnimationContext.Provider value={{ animationAchievement, triggerAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
