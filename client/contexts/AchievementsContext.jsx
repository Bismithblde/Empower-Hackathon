import React, { createContext, useReducer, useContext, useEffect } from 'react';
import useAuthContext from '../src/hooks/useAuthContext';

function achievementsReducer(state, action) {
  switch (action.type) {
    case 'ADD_ACHIEVEMENT':
      return {
        ...state,
        achievements: [...state.achievements, action.payload]
      };
    case 'TRIGGER_ANIMATION':
      return {
        ...state,
        achievements: state.achievements.map(achievement => 
          achievement.name === action.payload.name
            ? { ...achievement, animationTriggered: true }
            : achievement
        )
      };
    case 'SET_ACHIEVEMENTS':
      return {
        ...state,
        achievements: action.payload
      };
    default:
      return state;
  }
}

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
  const { user } = useAuthContext();
  const [state, dispatch] = useReducer(achievementsReducer, { achievements: [] });

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('/api/get-achievements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user.username })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch achievements');
        }
        const data = await response.json();
        dispatch({ type: 'SET_ACHIEVEMENTS', payload: data.response.achievement });
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
      
    };

    if (user) {
      fetchAchievements();
    }
  }, [user]);
  console.log(state)
  return (
    <AchievementsContext.Provider value={{ state, dispatch }}>
      {children}
    </AchievementsContext.Provider>
  );
}

export function useAchievements() {
  return useContext(AchievementsContext);
}
