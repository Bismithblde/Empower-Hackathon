import React, { createContext, useReducer, useContext, useEffect } from 'react';
import useAuthContext from '../src/hooks/useAuthContext';
import axios from 'axios';
import { useAnimationContext } from './AnimationContext';

const AchievementContext = createContext();

const achievementReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    case 'ADD_ACHIEVEMENT':
      if (state.achievements.some(ach => ach.name === action.payload.name)) {
        return state; 
      }
      return { ...state, achievements: [...state.achievements, action.payload] };
    default:
      return state;
  }
};

export const useAchievements = () => {
  return useContext(AchievementContext);
};

const initialState = {
  achievements: []
};

export const AchievementProvider = ({ children }) => {
  const { triggerAnimation } = useAnimationContext();
  const [state, dispatch] = useReducer(achievementReducer, initialState);
  const { user } = useAuthContext();
  const username = user ? user.username : null;

  useEffect(() => {
    if (username) {
      axios.post('/api/get-achievements', { username })
        .then(response => {
          dispatch({ type: 'SET_ACHIEVEMENTS', payload: response.data.response.achievement });
        })
        .catch(error => {
          console.error("Error fetching achievements", error);
        });
    }
  }, [username]);

  const addAchievement = (achievement) => {
    if (state.achievements.some(ach => ach.name === achievement.name)) {
      return;
    }

    const newAchievement = triggerAnimation(achievement);
    const newAchievements = [...state.achievements, newAchievement];

    dispatch({ type: 'ADD_ACHIEVEMENT', payload: newAchievement });

    if (username) {
      axios.post('/api/update-achievement', { username, achievements: newAchievements })
        .catch(error => {
          console.error("Error updating achievements", error);
        });
    }
  };

  return (
    <AchievementContext.Provider value={{ ...state, addAchievement }}>
      {children}
    </AchievementContext.Provider>
  );
};
